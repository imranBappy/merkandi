"use client";

import Button from "@/components/common/Button/Button";
import TextInput from "@/components/common/Input/TextInput";
import { useVerifyCodeMutation } from "@/redux/features/coupon/couponApi";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const ApplyCouponCode = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [verifyCode, { data, isLoading, isSuccess, isError }] =
    useVerifyCodeMutation();
  const router = useRouter();
  const query = useSearchParams();
  const params = useParams();

  const handleChange = (e) => {
    const { value } = e.target;
    setCode(value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code) {
      return setError("Please enter a coupon code");
    }

    verifyCode(code);
  };

  useEffect(() => {
    if (isError) {
      setError("Invalid coupon code");
    }

    if (isSuccess) {
      setError("");
      const plan = query.get("plan");
      router.push(`/register/order/${params.id}?plan=${plan}&coupon=${code}`);
    }
  }, [isError, isSuccess]);

  return (
    <div className=" ">
      <div className=" w-60">
        <TextInput
          placeholder="Coupon code"
          value={code}
          onChange={handleChange}
          error={error}
        />
        <p className="text-green-500 text-sm font-semibold">
          {isLoading && "Verifying code..."}
          {isSuccess && "Code verified"}
        </p>
      </div>
      <Button label="Apply" className={` w-40 mt-2`} onClick={handleSubmit} />
    </div>
  );
};

export default ApplyCouponCode;
