const Auth = require("../models/Auth");
const CouponCode = require("../models/CouponCode");
const calculatePercentage = require("../utils/calculatePercentage");

const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.initPayment = async (req, res, next) => {
  try {
    const { role, _id, coupon } = req.body;
    let amount = 0;
    if (role === "STANDARD") {
      amount = process.env.STANDARD_PACKAGE;
    } else if (role === "PREMIUM") {
      amount = process.env.PREMIUM_PACKAGE;
    } else {
      return next("Role is not correct!");
    }
    if (coupon) {
      const checkCode = await CouponCode.findOne({
        code: coupon,
        isActive: true,
        expireAt: { $gte: new Date() },
      });
      if (!checkCode) {
        return next("Invalid Coupon Code");
      }
      amount = calculatePercentage(amount, checkCode.discount);
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        user_id: _id,
      },
    });

    res.json(paymentIntent);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.successPayment = async (req, res, next) => {
  try {
    const { paymentIntentId } = req.body;
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    const user = await Auth.findById(paymentIntent.metadata.user_id);
    if (paymentIntent.status !== "succeeded") {
      return next("Payment failed!");
    }

    if (!user) {
      return next("User not found!");
    }
    if (user.isVerify) {
      return next("User is verified!");
    }

    await Auth.findByIdAndUpdate(
      paymentIntent.metadata.user_id,
      {
        isVerify: true,
      },
      { new: true }
    );

    res.json({ message: "Payment success!" });
  } catch (error) {
    next(error);
  }
};
