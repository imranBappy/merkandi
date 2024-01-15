"use client";

import React, { useEffect, useState } from "react";
import Toaster from "../common/Toaster/Toaster";
import Button from "../common/Button/Button";
import TextInput from "../common/Input/TextInput";
import { usePostCouponMutation } from "@/redux/features/coupon/couponApi";

const AddCoupon = () => {
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
    expireAt: "",
  });
  const [error, setError] = useState({ code: "", discount: "", expireAt: "" });

  const [addCoupon, { data, isLoading, isError, isSuccess }] =
    usePostCouponMutation();

  useEffect(() => {
    if (isError) {
      Toaster({
        type: "error",
        message: error?.data || "Something went wrong",
      });
    }
    if (isSuccess && !isLoading && !isError) {
      Toaster({
        type: "success",
        message: "Added successfully",
      });
      setCoupon({
        code: "",
        discount: 0,
        expireAt: "",
      });
    }
  }, [data, isLoading, isError, error?.data, isSuccess, setCoupon]);

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setCoupon({ ...coupon, [name]: value });
    setError({ ...error, [name]: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!coupon.code) {
      setError({ ...error, code: "Code is required" });
      return;
    }
    if (!coupon.discount) {
      setError({ ...error, discount: "Discount is required" });
      return;
    }
    if (NaN === typeof Number(coupon.discount)) {
      setError({ ...error, discount: "Discount must be a number" });
      return;
    }

    if (Number(coupon.discount) > 100) {
      setError({ ...error, discount: "Discount must be less than 100" });
      return;
    }

    if (Number(coupon.discount) < 0) {
      setError({ ...error, discount: "Discount must be greater than 0" });
      return;
    }

    if (!coupon.expireAt) {
      setError({ ...error, expireAt: "ExpireAt is required" });
      return;
    }

    addCoupon(coupon);
  };

  return (
    <div className="w-full mb-4 flex flex-col gap-4">
      <TextInput
        name={"code"}
        value={coupon.code}
        onChange={handleChange}
        placeholder="Enter code"
        error={error.code}
      />

      <TextInput
        name={"discount"}
        value={coupon.discount}
        onChange={handleChange}
        placeholder="Enter discount in percent ( e.g 15 ) "
        error={error.discount}
        type="number"
      />
      <TextInput
        name={"expireAt"}
        value={coupon.expireAt}
        onChange={handleChange}
        placeholder="Enter expireAt"
        error={error.expireAt}
        type="date"
      />

      <Button
        className={" w-full"}
        disabled={isLoading}
        onClick={handleSubmit}
        label={"Save"}
      />
    </div>
  );
};

export default AddCoupon;
