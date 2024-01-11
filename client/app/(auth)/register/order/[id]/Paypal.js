"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button/Button";
import { useCreateStripePaymentMutation } from "@/redux/features/payment/paymentApi";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Loading from "@/components/common/Loader/Loading";
import Toaster from "@/components/common/Toaster/Toaster";
import PaymentMessage from "./PaymentMessage";

const Paypal = () => {
  const initialOptions = {
    "client-id":
      "ATpd_RagWs59VcEJ-Rv3bzkW2tlC-os2VmWmB9sT7VAtR3eoE0tGXOJLYBw1gkHXAB6x46JZxL5dNwAU",
    "disable-funding": "paylater,venmo",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  const router = useRouter();
  const params = useParams();
  const query = useSearchParams();

  const handlePay = () => {
    router.push(`/register/order/${params.id}?paymentType=paypal`);
  };

  if (!params.id) {
    return <Loading />;
  }

  if (
    query.get("status") === "success" &&
    query.get("paymentType") === "paypal"
  ) {
    return <PaymentMessage message="Payment Successful" />;
  }

  if (query.get("paymentType") === "paypal") {
    return (
      <div className=" max-w-3xl m-auto p-5 bg-white my-5 flex flex-col gap-4  ">
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            style={{
              shape: "rect",
              layout: "vertical",
            }}
            createOrder={async () => {
              try {
                const response = await fetch(
                  "http://localhost:5000/payment/paypal/init",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      user_id: params.id,
                    }),
                  }
                );

                const orderData = await response.json();
                console.log({ orderData });

                if (orderData.id) {
                  return orderData.id;
                }
                throw new Error("Invalid order ID");
              } catch (error) {
                console.error(error);
                // setMessage(`Could not initiate PayPal Checkout...${error}`);
              }
            }}
            onApprove={async (data, actions) => {
              try {
                console.log({ data, actions, user: params.id });
                const response = await fetch(
                  `http://localhost:5000/payment/paypal/success`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      order_id: data.orderID,
                      user: params.id,
                    }),
                  }
                );

                const orderData = await response.json();

                const errorDetail = orderData?.details?.[0];

                if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                  return actions.restart();
                } else if (errorDetail) {
                  throw new Error(
                    `${errorDetail.description} (${orderData.debug_id})`
                  );
                } else {
                  if (orderData.status === "COMPLETED") {
                    router.push(
                      `/register/order/${params.id}?status=success&paymentType=paypal`
                    );
                  }
                }
              } catch (error) {
                console.error(error);
                Toaster({
                  type: "error",
                  message: `Could not capture PayPal transaction ${error}`,
                });
              }
            }}
          />
        </PayPalScriptProvider>
      </div>
    );
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="flex flex-col flex-grow items-center justify-center border p-4">
        <Image src="/images/paypal.png" alt="Paypal" width={200} height={200} />
        <Button
          type="submit"
          className="bg-yellow-600 hover:bg-yellow-700 text-white 
            w-full h-10 p-2 mt-4
              "
          label="PAY"
          onClick={handlePay}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default Paypal;
