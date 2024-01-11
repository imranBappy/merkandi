"use client";
import {
  usePostBrandMutation,
  useUpdateBrandMutation,
} from "@/redux/features/brand/brandApi";
import React, { useEffect, useState } from "react";
import Toaster from "../common/Toaster/Toaster";
import Button from "../common/Button/Button";
import TextInput from "../common/Input/TextInput";
import Textarea from "../common/Input/Textarea";
import ImageManager from "../common/ImageManager";

const AddBrand = ({ brandState, logoState, bannerState }) => {
  const [error, setError] = useState({ name: "" });
  const [brand, setBrand] = brandState;
  const [logo, setLogo] = logoState;
  const [banner, setBanner] = bannerState;

  const [addBrand, { data, isLoading, isError, isSuccess }] =
    usePostBrandMutation();
  const [
    updateBrand,
    {
      data: updateData,
      isLoading: updateLogin,
      isError: updateError,
      isSuccess: updateSuccess,
    },
  ] = useUpdateBrandMutation();

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
      setBrand({
        name: "",
        description: "",
        logo: "",
        banner: "",
      });
      setLogo([]);
      setBanner([]);
    }
    //add setBrand, error, setLogo, setBanner
  }, [isError, setBrand, setLogo, setBanner, isSuccess]);
  useEffect(() => {
    if (updateError) {
      Toaster({
        type: "error",
        message: "Something went wrong",
      });
    }
    if (updateSuccess) {
      Toaster({
        type: "success",
        message: "Updated successfully",
      });
      setBrand({
        name: "",
        description: "",
        logo: "",
        banner: "",
      });
      setLogo([]);
      setBanner([]);
    }
    //add setBrand, error, setLogo, setBanner
  }, [updateError, setBrand, setLogo, setBanner, updateSuccess]);

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setBrand({ ...brand, [name]: value });
    setError({ ...error, [name]: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!brand.name) {
      setError({
        ...error,
        name: "Name is required",
      });
      return;
    }

    if (brand._id) {
      return updateBrand({
        id: brand._id,
        body: {
          name: brand.name,
          description: brand.description,
          logo: logo[0],
          banner: banner[0],
        },
      });
    }
    addBrand({
      name: brand.name,
      description: brand.description,
      logo: logo[0],
      banner: banner[0],
    });
  };

  return (
    <div className="w-full mb-4 flex flex-col gap-4">
      <TextInput
        name={"name"}
        value={brand.name}
        onChange={handleChange}
        placeholder="Enter a brand name"
        error={error.name}
      />
      <Textarea
        name={"description"}
        value={brand.description}
        onChange={handleChange}
        placeholder="Enter description"
      />

      <ImageManager selectedState={logoState} label="Choose Logo" />
      <ImageManager selectedState={bannerState} label="Choose Banner" />

      <Button
        className={" w-full"}
        disabled={isLoading}
        onClick={handleSubmit}
        label={"Save"}
      />
    </div>
  );
};

export default AddBrand;
