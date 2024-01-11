"use client";
import Button from "@/components/common/Button/Button";
import PasswordInput from "@/components/common/Input/PasswordInput";
import TextInput from "@/components/common/Input/TextInput";
import Toaster from "@/components/common/Toaster/Toaster";
import { useResetMutation } from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const [payload, setPayload] = useState({
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const [reset, { data, isLoading, isError, error, isSuccess }] =
    useResetMutation();
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayload((preSatate) => ({ ...preSatate, [name]: value }));
    handleError({ name, value });
  };

  const handleError = (input) => {
    const { name, value } = input;
    if (name === "password") {
      if (value.length >= 8) {
        setErrors((preSatate) => ({
          ...preSatate,
          password: "",
        }));
      } else {
        setErrors((preSatate) => ({
          ...preSatate,
          password: "Minmum password length 8",
        }));
      }
    } else {
      if (value === payload.password) {
        setErrors((preSatate) => ({
          ...preSatate,
          confirmPassword: "",
        }));
      } else {
        setErrors((preSatate) => ({
          ...preSatate,
          confirmPassword: "Password not match",
        }));
      }
    }
  };

  const checkError = () => {
    let value = true;
    let error = true;
    if (!payload.confirmPassword || !payload.password || !payload.otp) {
      value = false;
    }
    if (errors.confirmPassword || errors.password) {
      error = false;
    }
    return value && error;
  };

  useEffect(() => {
    if (data || isError) {
      if (isError)
        return Toaster({
          type: "error",
          message: error?.data || "Something went wrong",
        });
      if (isSuccess) {
        router.push("/login");
        Toaster({
          type: "success",
          message: data?.message || "Password reset successfully",
        });
      }
    }
    //add isSuccess
  }, [data, isLoading, isError, error, router, isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!payload.otp) {
      return Toaster({
        type: "error",
        message: "Enter the otp",
      });
    }
    const error = checkError();
    if (!error) return;
    const { otp, password } = payload;
    reset({ otp, password });
  };

  return (
    <div className="py-0 flex flex-col justify-center sm:py-8">
      <div className="relative py-6 m-4 sm:max-w-2xl sm:mx-auto">
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative p-8  bg-white shadow-lg sm:rounded-3xl">
          <div className="max-w-md min-w-[300px]  mx-auto space-y-3">
            <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
            <form onSubmit={handleSubmit}>
              <TextInput
                name="otp"
                type="text"
                className="border p-2 w-full outline-0"
                placeholder="Enter otp"
                value={payload.otp}
                onChange={handleInputChange}
              />
              <PasswordInput
                name="password"
                value={payload.password}
                onChange={handleInputChange}
                className="border p-2 w-full outline-0"
                placeholder="Enter new password"
                error={errors.password}
              />

              <PasswordInput
                name="confirmPassword"
                value={payload.confirmPassword}
                onChange={handleInputChange}
                className="border p-2 w-full outline-0"
                placeholder="Enter confirm password"
                error={errors.confirmPassword}
              />

              <Button
                disabled={isLoading}
                href={"#"}
                onClick={handleSubmit}
                className="w-full block text-center border bg-m text-white py-3 font-normal text-sm leading-3"
                label={isLoading ? "Loading..." : "Reset Password"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
