"use client";

import React from "react";
import Paypal from "./Paypal";
import Stripe from "./Stripe";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const query = useSearchParams();
  const paymentType = query.get("paymentType");

  if (paymentType === "stripe") return <Stripe />;
  else if (paymentType === "paypal") return <Paypal />;

  return (
    <div className=" max-w-6xl m-auto bg-white p-4 my-4">
      <div>
        <h6 className="font-bold text-2xl text-center   text-gray-600 my-4">
          Choose the payment method
        </h6>
        <div className="flex gap-4 mt-4">
          <Stripe />
          <Paypal />
        </div>
      </div>
    </div>
  );
};

export default Page;
