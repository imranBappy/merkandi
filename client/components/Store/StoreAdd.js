"use client";
import React, { useEffect, useState } from "react";
import Switch from "../common/Input/Switch";
import { useSelector } from "react-redux";
import TextInput from "../common/Input/TextInput";
import TextboxInput from "../common/Input/TextboxInput";
import Button from "../common/Button/Button";
import {
  useGetStoreQuery,
  usePostStoreMutation,
  useUpdateStoreMutation,
} from "@/redux/features/store/storeApi";
import Toaster from "../common/Toaster/Toaster";

const errorValidation = (store) => {
  let errors = {};
  let isError = false;
  if (!store.company) {
    errors.company = "Company is required";
    isError = true;
  }
  if (!store.name) {
    errors.name = "Name is required";
    isError = true;
  }
  if (!store.street) {
    errors.street = "Street is required";
    isError = true;
  }
  if (!store.postalCode) {
    errors.postalCode = "Postal Code is required";
    isError = true;
  }
  if (!store.location) {
    errors.location = "Location is required";
    isError = true;
  }
  if (!store.country) {
    console.log("country", store);
    errors.country = "Country is required";
    isError = true;
  }
  if (!store.vatId) {
    errors.vatId = "VAT ID Number is required";
    isError = true;
  }
  if (!store.phone) {
    errors.phone = "Phone number is required";
    isError = true;
  }
  return {
    isError,
    errors,
  };
};

const StoreAdd = ({ storeData, countries }) => {
  const [store, setStore] = useState({
    company: "",
    name: "",
    street: "",
    postalCode: "",
    location: "",
    country: "",
    vatId: "",
    about: "",
    active: true,
    phone: "",
  });

  const [error, setError] = useState({
    company: "",
    name: "",
    street: "",
    postalCode: "",
    location: "",
    country: "",
    vatId: "",
    phone: "",
  });

  const auth = useSelector((state) => state.auth);

  const [
    addStore,
    {
      data,
      isError: addStoreError,
      isSuccess: addStoreSuccess,
      isLoading: addStoreLoading,
    },
  ] = usePostStoreMutation();

  // const { data: storeData } = useGetStoreQuery(str._id, {
  //   skip: !str._id,
  // });

  const [
    updateStore,
    {
      isLoading: updateStoreLoading,
      isError: updateStoreError,
      isSuccess: updateStoreSuccess,
    },
  ] = useUpdateStoreMutation();

  useEffect(() => {
    if (addStoreSuccess) {
      setStore({
        ...store,
        _id: data._id,
      });
      Toaster({
        type: "success",
        message: "Store added successfully",
      });
    }
    if (addStoreError) {
      Toaster({
        type: "error",
        message: "Something went wrong, please try again",
      });
    }
  }, [addStoreError, addStoreSuccess]);

  useEffect(() => {
    if (updateStoreSuccess) {
      Toaster({
        type: "success",
        message: "Store updated successfully",
      });
    }
    if (updateStoreError) {
      Toaster({
        type: "error",
        message: "Something went wrong, please try again",
      });
    }
  }, [updateStoreError, updateStoreSuccess, updateStoreLoading]);

  useEffect(() => {
    if (storeData) {
      setStore(storeData);
    }
  }, [storeData]);

  useEffect(() => {
    setStore((store) => ({
      ...store,
      country: storeData?._id,
    }));
    if (auth?.data?.name) {
      setStore((store) => ({
        ...store,
        name: auth.data.name,
      }));
    }
  }, [storeData, auth]);

  const handleChange = (e) => {
    setStore((store) => ({
      ...store,
      [e.target.name]: e.target.value,
    }));

    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const handleSave = () => {
    const newStore = {
      ...store,
      country: store.country || storeData._id,
    };
    const { isError, errors } = errorValidation(newStore);

    if (isError) {
      setError(errors);
      return;
    }

    if (newStore._id) {
      updateStore({
        id: newStore._id,
        body: newStore,
      });
      return;
    }

    addStore(newStore);
  };

  const handleSwitch = (value) => {
    setStore((store) => ({
      ...store,
      active: value,
    }));
  };

  return (
    <div className="w-full bg-white">
      <div className="border-b p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">
          {storeData.type === "shipping" ? "Shipping And Goods" : "Main Data"}
        </h1>
        <Switch value={store.active} onChange={handleSwitch} />
      </div>
      <div className="flex flex-wrap p-4 space-y-3">
        <div className="w-full">
          <TextInput
            label="Company"
            placeholder="Company"
            value={store.company}
            onChange={handleChange}
            name="company"
            error={error.company}
            required={true}
          />
        </div>

        <div className="w-full">
          <TextInput
            label="Name"
            placeholder="Name"
            value={store.name}
            onChange={handleChange}
            name="name"
            error={error.name}
            required={true}
          />
        </div>

        <div className="w-full">
          <TextInput
            label="Phone"
            placeholder="Phone"
            value={store.phone}
            onChange={handleChange}
            name="phone"
            error={error.phone}
            required={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="w-full">
            <TextInput
              label="Street"
              placeholder="Street"
              value={store.street}
              onChange={handleChange}
              name="street"
              error={error.street}
              required={true}
            />
          </div>
          <div className="w-full">
            <TextInput
              label="Postal Code"
              placeholder="Postal Code"
              value={store.postalCode}
              onChange={handleChange}
              name="postalCode"
              error={error.postalCode}
              required={true}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="w-full">
            <TextInput
              label="Location"
              placeholder="Location"
              value={store.location}
              onChange={handleChange}
              name="location"
              error={error.location}
              required={true}
            />
          </div>
          <div className="w-full">
            <label className="mb-1 block text-base text-black required">
              Country
            </label>
            <div className="relative w-full border outline-0">
              <select
                className="appearance-none outline-0 w-full p-2 bg-white"
                name="country"
                id="frm-whatever"
                value={store.country || store.country?._id}
                onChange={handleChange}
              >
                <option value={""}>Select Country</option>
                {countries.map((country) => (
                  <option key={country._id} value={country._id}>
                    {country.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
              </div>
            </div>
            <p style={{ marginLeft: 1 }} className="text-red-600 text-xs mt-1">
              {error.country}
            </p>
          </div>
        </div>
        <div className="w-full">
          <TextInput
            label="VAT ID Number"
            placeholder="VAT ID Number"
            value={store.vatId}
            onChange={handleChange}
            name="vatId"
            error={error.vatId}
            required={true}
          />
        </div>

        <div className="w-full">
          <TextboxInput
            label="About"
            placeholder="About"
            value={store.about}
            onChange={handleChange}
            name="about"
            error={error.about}
          />
        </div>
        <Button
          disabled={addStoreLoading || updateStoreLoading}
          className="w-full"
          label="Save"
          onClick={handleSave}
        />
      </div>
    </div>
  );
};

export default StoreAdd;
