"use client";
import Button from "@/components/common/Button/Button";
import { useRouter } from "next/navigation";
import React from "react";

const PaymentMessage = ({ message = "" }) => {
  const router = useRouter();
  return (
    <div
      className="
        max-w-6xl m-auto bg-white p-4 my-4  "
    >
      <h1
        className="
              font-bold text-2xl text-center   text-gray-600 my-4"
      >
        {message}
      </h1>

      <div
        className="
              flex justify-center
              py-4
        "
      >
        <Button label={"Login"} onClick={() => router.replace("/login")} />
      </div>
    </div>
  );
};

export default PaymentMessage;
