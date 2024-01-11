"use client";
import React, { useEffect, useState } from "react";
import Toaster from "../common/Toaster/Toaster";
import Button from "../common/Button/Button";
import TextInput from "../common/Input/TextInput";
import ImageManager from "../common/ImageManager";
import {
  usePostCountryMutation,
  useUpdateCountryMutation,
} from "@/redux/features/country/countryApi";

const validate = (country) => {
  const error = {};
  let isError = false;
  if (!country.name) {
    error.name = "Name is required";
    isError = true;
  }
  if (!country.shortName) {
    error.shortName = "Short name is required";
    isError = true;
  }
  if (!country.code) {
    error.code = "Code is required";
    isError = true;
  }
  if (!country.currency) {
    error.currency = "Currency is required";
    isError = true;
  }
  if (!country.currencySymbol) {
    error.currencySymbol = "Currency symbol is required";
    isError = true;
  }
  return { isError, error };
};

const AddContry = ({ countryState, flagState }) => {
  const [error, setError] = useState({
    name: "",
    shortName: "",
    code: "",
    currency: "",
    currencySymbol: "",
    flag: "",
  });
  const [country, setCountry] = countryState;
  const [flag, setFlag] = flagState;

  const [addCountry, { isSuccess, isLoading, isError }] =
    usePostCountryMutation();
  const [updateCountry, { isSuccess: updateSuccess, isError: updateError }] =
    useUpdateCountryMutation();

  useEffect(() => {
    if (isError) {
      Toaster({
        type: "error",
        message: "Something went wrong",
      });
    }
    if (isSuccess) {
      Toaster({
        type: "success",
        message: "Added successfully",
      });
      setCountry({
        name: "",
        shortName: "",
        code: "",
        currency: "",
        currencySymbol: "",
        flag: "",
      });
      setFlag([]);
    }
  }, [isError, isSuccess, setCountry, setFlag]);

  useEffect(() => {
    if (updateError) {
      Toaster({
        type: "error",
        message: "Something went wrong",
      });
    }
    if (updateSuccess) {
      setCountry({
        name: "",
        shortName: "",
        code: "",
        currency: "",
        currencySymbol: "",
        flag: "",
      });
      setFlag([]);
      Toaster({
        type: "success",
        message: "Updated successfully",
      });
    }
  }, [updateError, setCountry, setFlag, updateSuccess]);

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setCountry({ ...country, [name]: value });
    setError({ ...error, [name]: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { isError, error } = validate(country);
    setError(error);
    if (isError) return;
    if (flag.length === 0) {
      return setError({ ...error, flag: "Flag is required" });
    }

    if (country._id) {
      return updateCountry({
        id: country._id,
        body: {
          ...country,
          flag: flag[0],
        },
      });
    }
    console.log("added", {
      ...country,
      flag: flag[0],
    });
    addCountry({
      ...country,
      flag: flag[0],
    });
  };

  return (
    <div className="w-full mb-4 flex flex-col gap-2">
      <h1 className="text-md font-semibold my-2 block">Add Country</h1>

      <TextInput
        name={"name"}
        value={country.name}
        onChange={handleChange}
        placeholder="Enter country name"
        error={error.name}
      />
      <TextInput
        name={"shortName"}
        value={country.shortName}
        onChange={handleChange}
        placeholder="Enter country short name"
        error={error.shortName}
      />
      <TextInput
        name={"code"}
        value={country.code}
        onChange={handleChange}
        placeholder="Enter country code"
        error={error.code}
      />
      <TextInput
        name={"currency"}
        value={country.currency}
        onChange={handleChange}
        placeholder="Enter country currency"
        error={error.currency}
      />
      <TextInput
        name={"currencySymbol"}
        value={country.currencySymbol}
        onChange={handleChange}
        placeholder="Enter country currency symbol"
        error={error.currencySymbol}
      />
      <ImageManager
        error={error.flag}
        selectedState={flagState}
        label="Choose Logo"
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

export default AddContry;
