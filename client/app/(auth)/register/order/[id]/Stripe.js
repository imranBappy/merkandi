"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Button from "@/components/common/Button/Button";
import { useCreateStripePaymentMutation } from "@/redux/features/payment/paymentApi";
import { useRouter, useSearchParams } from "next/navigation";
import { Elements } from "@stripe/react-stripe-js";
import StripePay from "./StripePay";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
import { useParams } from "next/navigation";

const Stripe = () => {
  const [paymentInit, { data, isLoading, isSuccess }] =
    useCreateStripePaymentMutation();
  const router = useRouter();
  const query = useSearchParams();
  const clientSecret = query.get("payment_intent_client_secret");
  const params = useParams();

  const handlePay = () => {
    const plan = query.get("plan");
    paymentInit({
      role: plan.toUpperCase(),
      _id: params.id,
    });
  };

  useEffect(() => {
    if (isSuccess && data?.client_secret) {
      router.push(
        `/register/order/${params.id}?paymentType=stripe&payment_intent_client_secret=${data.client_secret}`
      );
    }
  }, [isSuccess, data?.client_secret, params.id, router]);

  const options = {
    clientSecret: clientSecret,
  };

  if (clientSecret) {
    return (
      <>
        <Elements options={options} stripe={stripePromise}>
          <StripePay />
        </Elements>
      </>
    );
  }

  return (
    <div className="flex flex-col flex-grow items-center justify-center border p-4">
      <Image src="/images/stripe.png" alt="Paypal" width={200} height={200} />
      <Button
        disabled={isLoading}
        onClick={handlePay}
        type="submit"
        className="bg-yellow-600 hover:bg-yellow-700 text-white 
            w-full h-10 p-2 mt-4
              "
        label="PAY"
      />
    </div>
  );
};

export default Stripe;
