"use client";
import PublicRoute from "@/components/PublicRoute/PublicRoute";
import Button from "@/components/common/Button/Button";
import PasswordInput from "@/components/common/Input/PasswordInput";
import TextInput from "@/components/common/Input/TextInput";
import Toaster from "@/components/common/Toaster/Toaster";
import { useSigninMutation } from "@/redux/features/auth/authApi";
import emailValidator from "@/utils/emailValidator";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [login, { data, isLoading, isError, error, isSuccess }] =
    useSigninMutation();
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
    } else {
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
    }
  };

  const checkError = () => {
    let value = true;
    let error = true;
    if (!payload.email || !payload.password) {
      value = false;
    }
    if (errors.email || errors.password) {
      error = false;
    }
    return value && error;
  };
  useEffect(() => {
    if (data || isError) {
      if (isError)
        Toaster({
          type: "error",
          message: error?.data || "Something went wrong",
        });
      if (data?.isAuthintication && isSuccess) {
        Toaster({
          type: "success",
          message: data?.message || "Login successfully",
        });
        router.push("/");
      }
    }
    //add isSuccess
  }, [data, isLoading, isError, error, router, isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = checkError();
    if (!error) return;
    login(payload);
  };

  return (
    <PublicRoute>
      <div className="py-0 flex flex-col justify-center sm:py-8">
        <div className="relative py-6 m-4 sm:max-w-2xl sm:mx-auto">
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative p-8 bg-white shadow-lg sm:rounded-3xl">
            <div className="max-w-md mx-auto space-y-3">
              <h1 className="text-2xl font-bold mb-4">Login</h1>
              <TextInput
                name="email"
                type="email"
                className="border p-2 w-full outline-0"
                placeholder="Email address"
                value={payload.email}
                onChange={handleInputChange}
              />
              <PasswordInput
                name="password"
                value={payload.password}
                onChange={handleInputChange}
                className="border p-2 w-full outline-0"
                placeholder="Type password"
              />

              <Link href="/forget" className="text-m text-right block">
                Forgot your password?
              </Link>
              <Button
                disabled={isLoading}
                href={"#"}
                onClick={handleSubmit}
                className="w-full block text-center border bg-m text-white py-3 font-normal text-sm leading-3"
                label={isLoading ? "Loading..." : "Login"}
              />

              <div className="pt-3 mt-3 border-t flex justify-center">
                <p className="text-xm leading-6 float-left mr-1">
                  Dont you have an account yet?
                </p>
                <Link href="/register" className="text-m text-xm">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicRoute>
  );
}
