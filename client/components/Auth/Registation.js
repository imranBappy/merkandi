"use client";
import React, { useEffect, useState } from "react";
import Button from "../common/Button/Button";
import TextInput from "../common/Input/TextInput";
import SelectInput from "../common/Input/SelectInput";
import { useGetCountriesQuery } from "@/redux/features/country/countryApi";
import { useSignupMutation } from "@/redux/features/auth/authApi";
import { useRouter, useSearchParams } from "next/navigation";
import Toaster from "../common/Toaster/Toaster";

const handleFormValidation = (payload) => {
  const errors = {};
  let isError = false;
  if (!payload.name) {
    errors.name = "Name is required";
    isError = true;
  }
  if (!payload.surname) {
    errors.surname = "Postal code is required";
    isError = true;
  }
  if (!payload.email) {
    errors.email = "Email is required";
    isError = true;
  }
  if (!payload.country) {
    errors.country = "Country is required";
    isError = true;
  }
  if (!payload.password) {
    errors.password = "Password is required";
    isError = true;
  }
  if (!payload.isAgreed) {
    errors.isAgreed = "Please accept terms and conditions";
    isError = true;
  }
  return { errors, isError };
};

const handleCompanyFormValidation = (payload) => {
  const errors = {};
  let isError = false;
  if (!payload.company) {
    errors.company = "Company is required";
    isError = true;
  }
  if (!payload.vatId) {
    errors.vatId = "Tax is required";
    isError = true;
  }
  if (!payload.street) {
    errors.street = "Street is required";
    isError = true;
  }
  return { errors, isError };
};

const Registation = () => {
  const [payload, setPayload] = useState({
    name: "",
    surname: "",
    email: "",
    role: "",
    password: "pass12345",
    isWholesaler: false,
    isAgreed: false,
  });

  const [isCompany, setIsCompany] = useState(false);
  const [company, setCompany] = useState({
    company: "",
    vatId: "",
    street: "",
    postalCode: "",
    city: "",
  });
  const [companyError, setCompanyError] = useState({});

  const [errors, setErrors] = useState({});
  const { data: { countries = [] } = {} } = useGetCountriesQuery();
  const [signup, { isLoading, isError, error, isSuccess, data }] =
    useSignupMutation();
  const params = useSearchParams();
  const router = useRouter();

  const optionsCountryCode = [...countries].map((item) => ({
    _id: item._id,
    name: `${item.name} (${item.code})`,
  }));

  const optionsCountry = [...countries].map((item) => ({
    _id: item._id,
    name: item.name,
  }));

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPayload({ ...payload, [name]: value });
    errors[name] = "";
    setErrors(errors);
  };

  const handleCompanyInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCompany((previousState) => ({
      ...previousState,
      [name]: value,
    }));

    companyError[name] = "";
    setCompanyError(companyError);
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    const { errors, isError } = handleFormValidation(payload);
    if (isError) {
      setErrors(errors);
      return;
    }
    if (isCompany) {
      const { errors: companyErrors, isError: isCompanyError } =
        handleCompanyFormValidation(company);

      if (isCompanyError) {
        setCompanyError(companyErrors);
        return;
      }
    }

    const plan = params.get("plan").toLocaleUpperCase();
    const body = {
      ...payload,
      name: `${payload.name} ${payload.surname}`,
      phone: `${payload.countryCode} ${payload.phone}`,
      role: plan,
      isCompany: isCompany,
      ...(isCompany && { company: company }),
    };

    delete body.surname;
    delete body.countryCode;
    delete body.isAgreed;
    delete body.isWholesaler;

    signup(body);
  };
  useEffect(() => {
    if (isSuccess) {
      const plan = params.get("plan");
      router.push(`/register/order/${data._id}?plan=${plan}`);
    }
    if (isError) {
      Toaster({
        type: "error",
        message: error.data,
      });
    }
  }, [isSuccess, isError, error?.data, data?._id, params, router]);

  return (
    <form
      onSubmit={handleRegister}
      className="w-full md:w-2/3 bg-white mr-0 md:mr-6 p-6"
    >
      <div className="black mb-4 pb-4 border-b">
        <h1 className="w-full md:w-72 text-lg font-semibold mb-3">
          Basic information
        </h1>
        <p>* All fields marked with an asterisk (*) are required</p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row items-start justify-between">
        <h1 className="w-full md:w-3/12 text-md font-semibold">
          Basic information
        </h1>
        <div className=" flex-grow space-y-3">
          <div className="flex">
            <div className="w-full md:w-2/4 p-2 pt-0">
              <TextInput
                label="Name"
                name="name"
                value={payload.name}
                onChange={handleChange}
                required={true}
                error={errors.name}
              />
            </div>
            <div className="w-full md:w-2/4 p-2 pt-0">
              <TextInput
                label="Surname"
                name="surname"
                value={payload.surname}
                onChange={handleChange}
                required={true}
                error={errors.surname}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-full md:w-2/4 p-2">
              <TextInput
                label="Email"
                name="email"
                value={payload.email}
                onChange={handleChange}
                required={true}
                error={errors.email}
              />
            </div>
            <div className="w-full md:w-2/4 p-2">
              <TextInput
                label="Password"
                name="password"
                value={payload.password}
                onChange={handleChange}
                required={true}
                error={errors.password}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-full md:w-2/4 p-2">
              <SelectInput
                label="Country Code"
                name="countryCode"
                value={payload.countryCode}
                onChange={handleChange}
                options={optionsCountryCode}
              />
            </div>
            <div className="w-full md:w-2/4 p-2">
              <TextInput
                label={"Phone Number"}
                name="phone"
                value={payload.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full md:w-2/4 p-2">
            <SelectInput
              label="Country "
              name="country"
              value={payload.country}
              onChange={handleChange}
              options={optionsCountry}
              error={errors.country}
              required={true}
            />
          </div>
          <div className="flex items-center p-2">
            <input
              className="border outline-0 h-5 w-5 mr-2"
              type="checkbox"
              name="name"
              onClick={(e) => setIsCompany(e.target.value === "false")}
              value={isCompany}
            />
            <label className="block">I register as a company</label>
          </div>

          {isCompany && (
            <>
              <div className="flex">
                <div className="w-full md:w-2/4 p-2 pt-0">
                  <TextInput
                    label="Company"
                    name="company"
                    value={company.company}
                    onChange={handleCompanyInput}
                    required={true}
                    error={companyError.company}
                  />
                </div>
                <div className="w-full md:w-2/4 p-2 pt-0">
                  <TextInput
                    label="EU Tax number "
                    name="vatId"
                    value={company.vatId}
                    onChange={handleCompanyInput}
                    required={true}
                    error={companyError.vatId}
                  />
                </div>
              </div>

              <div className="flex">
                <div className="w-full md:w-2/4 p-2 pt-0">
                  <TextInput
                    label="Street, unit"
                    name="street"
                    value={company.street}
                    onChange={handleCompanyInput}
                    required={true}
                    error={companyError.street}
                  />
                </div>
                <div className="w-full md:w-2/4 p-2 pt-0">
                  <TextInput
                    label="Postal code"
                    name="postalCode"
                    value={company.postalCode}
                    onChange={handleCompanyInput}
                    required={true}
                    error={companyError.postalCode}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col border-t   gap-4 md:flex-row items-start justify-between">
        <h1 className="w-full mt-4 md:w-3/12  text-md font-semibold">
          On Merkandi I want to:
        </h1>
        <div className=" flex-grow space-y-3 mt-2">
          <div className="flex gap-4">
            <div className="flex items-center p-2">
              <input
                className="border outline-0 h-5 w-5 mr-2"
                type="checkbox"
                name="name"
              />
              <label className="block">Sell </label>
            </div>
            <div className="flex items-center p-2">
              <input
                className="border outline-0 h-5 w-5 mr-2"
                type="checkbox"
                name="name"
              />
              <label className="block">Buy </label>
            </div>
          </div>
          <p className=" text-sm">
            Thanks to this information, we will personalize your experience on
            our platform
          </p>
        </div>
      </div>

      <div className="flex flex-col border-t  mt-4  gap-4 md:flex-row items-start justify-between">
        <h1 className="w-full mt-4 md:w-3/12  text-md font-semibold">
          Terms and Conditions and consents
        </h1>
        <div className=" flex-grow space-y-3 mt-2">
          <div className="p-2">
            <div
              className="flex items-center"
              onChange={(e) => {
                setPayload({ ...payload, isAgreed: e.target.checked });
                errors.isAgreed = "";
                setErrors(errors);
              }}
            >
              <input
                required={true}
                className="border outline-0 h-5 w-5 mr-2"
                type="checkbox"
                name="name"
              />
              <label className="block">
                I accept terms and Conditions and privacy Policy. *{" "}
              </label>
            </div>
            <p style={{ marginLeft: 1 }} className="text-red-600 text-xs mt-1">
              {errors.isAgreed}
            </p>
          </div>

          <Button
            label={"REGISTER AND PAY"}
            className={
              " bg-yellow-600 hover:bg-yellow-700 h-12 text-white w-full md:w-2/4 p-2"
            }
            onClick={handleRegister}
          />
        </div>
      </div>
    </form>
  );
};

export default Registation;
