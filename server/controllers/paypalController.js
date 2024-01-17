const fetch = require("node-fetch");
const Auth = require("../models/Auth");
const calculatePercentage = require("../utils/calculatePercentage");
const CouponCode = require("../models/CouponCode");

const {
  PAYPAL_CLIENT_ID,
  PAYPAL_CLIENT_SECRET,
  STANDARD_PACKAGE,
  PREMIUM_PACKAGE,
} = process.env;
const base = "https://api-m.sandbox.paypal.com";

const generateAccessToken = async () => {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      throw new Error("MISSING_API_CREDENTIALS");
    }
    const auth = Buffer.from(
      PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET
    ).toString("base64");
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
    next(error);
  }
};

async function handleResponse(response) {
  try {
    const jsonResponse = await response.json();
    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}

const createOrder = async (user_id, role = "", coupon) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  role = role.toUpperCase();

  let amount = 0;
  if (role === "STANDARD") {
    amount = STANDARD_PACKAGE;
  } else if (role === "PREMIUM") {
    amount = PREMIUM_PACKAGE;
  } else {
    throw Error("Role is not correct!");
  }

  if (coupon) {
    const checkCode = await CouponCode.findOne({
      code: coupon,
      isActive: true,
      expireAt: { $gte: new Date() },
    });
    if (!checkCode) {
      throw Error("Invalid Coupon Code");
    }
    amount = calculatePercentage(amount, checkCode.discount);
  }

  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "EUR",
          value: amount.toString(),
        },
        custom_id: user_id,
      },
    ],
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
};

exports.createPayment = async (req, res, next) => {
  try {
    const { user_id, role, coupon } = req.body;
    console.log({ user_id, role, coupon });
    const { jsonResponse, httpStatusCode } = await createOrder(
      user_id,
      role,
      coupon
    );

    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const captureOrder = async (order_id) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${order_id}/capture`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
  });
  return handleResponse(response);
};

exports.successPayment = async (req, res, next) => {
  try {
    const { order_id, user } = req.body;
    const { jsonResponse, httpStatusCode } = await captureOrder(order_id);

    const user_id =
      jsonResponse.purchase_units[0].payments.captures[0].custom_id;
    const status = jsonResponse.purchase_units[0].payments.captures[0].status;

    if (httpStatusCode !== 201) {
      return next(new Error(jsonResponse.message));
    }
    if (status !== "COMPLETED") {
      return next(new Error("Payment not completed"));
    }

    if (!user_id || !user) {
      return next(new Error("You is not a valid user "));
    }
    if (user_id !== user) {
      return next(new Error("You not authorized to make this payment"));
    }

    await Auth.findByIdAndUpdate(
      user_id,
      {
        isVerify: true,
      },
      { new: true }
    );

    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    next(error);
  }
};
