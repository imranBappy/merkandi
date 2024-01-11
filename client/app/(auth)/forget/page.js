"use client";
import Button from "@/components/common/Button/Button";
import TextInput from "@/components/common/Input/TextInput";
import Toaster from "@/components/common/Toaster/Toaster";
import {
  useForgetMutation,
  useSigninMutation,
} from "@/redux/features/auth/authApi";
import emailValidator from "@/utils/emailValidator";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const [payload, setPayload] = useState({
    email: "imranhosenbappy690@gmail.com",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const [forget, { data, isLoading, isError, error, isSuccess }] =
    useForgetMutation();
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayload((preSatate) => ({ ...preSatate, [name]: value }));
    handleError({ name, value });
  };

  const handleError = (input) => {
    const { name, value } = input;
    if (name === "email") {
      if (emailValidator(value)) {
        setErrors((preSatate) => ({
          ...preSatate,
          email: "",
        }));
      } else {
        setErrors((preSatate) => ({
          ...preSatate,
          email: "Enter the valide email",
        }));
      }
    }
  };

  const checkError = () => {
    let value = true;
    let error = true;
    if (!payload.email) {
      value = false;
    }
    if (errors.email) {
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
        router.push("/reset");
        Toaster({
          type: "success",
          message: data?.message || "Check your email to reset password",
        });
      }
    }
    //add isSuccess
  }, [data, isLoading, isError, error, router, isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = checkError();
    if (!error) return;
    forget(payload);
  };

  console.log(data);

  return (
    <div className="py-0 flex flex-col justify-center sm:py-8">
      <div className="relative py-6 m-4 sm:max-w-2xl sm:mx-auto">
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative p-8  bg-white shadow-lg sm:rounded-3xl">
          <div className="max-w-md min-w-[300px]  mx-auto space-y-3">
            <h1 className="text-2xl font-bold mb-4">Forget Password</h1>
            <form onSubmit={handleSubmit}>
              <TextInput
                name="email"
                type="email"
                className="border p-2 w-full outline-0 mb-3"
                placeholder="Email address"
                value={payload.email}
                onChange={handleInputChange}
              />

              <Button
                disabled={isLoading}
                href={"#"}
                onClick={handleSubmit}
                className="w-full block text-center border bg-m text-white py-3 font-normal text-sm leading-3"
                label={isLoading ? "Loading..." : "Forget Password"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
