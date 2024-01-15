"use client";

import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Button from "@/components/common/Button/Button";
import PaymentMessage from "./PaymentMessage";
import { useVerifyPaymentMutation } from "@/redux/features/payment/paymentApi";
import { useParams, useSearchParams } from "next/navigation";

const StripePay = () => {
  const stripe = useStripe();
  const elements = useElements();
  const params = useParams();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [verifyPayment] = useVerifyPaymentMutation();
  const query = useSearchParams();
  useEffect(() => {
    const clientSecret = query.get("payment_intent_client_secret");

    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then((res) => {
      const paymentIntent = res.paymentIntent;
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          verifyPayment({
            paymentIntentId: paymentIntent.id,
          });
          return <PaymentMessage message={message} />;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");

          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe, query, message, verifyPayment]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/register/order/${params?.id}?paymentType=stripe`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  if (query.get("redirect_status") === "succeeded") {
    return <PaymentMessage message="Payment succeeded!" />;
  }

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className=" max-w-6xl m-auto p-5 bg-white my-5 flex flex-col gap-4"
    >
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <Button
        className="bg-yellow-600 hover:bg-yellow-700 text-white 
            w-full h-10 p-2 mt-4
              flex items-center justify-center
            "
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isLoading ? (
            <div
              className="
            
            w-6 h-6 border-4 
            border-white
            rounded-full animate-spin

            "
              id="spinner"
            ></div>
          ) : (
            "Pay now "
          )}
        </span>
      </Button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default StripePay;
