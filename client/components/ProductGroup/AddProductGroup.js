"use client";
import React, { useEffect, useState } from "react";
import Toaster from "../common/Toaster/Toaster";
import Button from "../common/Button/Button";
import TextInput from "../common/Input/TextInput";
import Textarea from "../common/Input/Textarea";
import {
  usePostProductGroupMutation,
  useUpdateProductGroupMutation,
} from "@/redux/features/productGroup/productGroupApi";

const AddProductGroup = ({ productGroupState }) => {
  const [error, setError] = useState({ name: "" });
  const [productGroup, setProductGroup] = productGroupState;

  const [addProductGroup, { data, isLoading, isError, isSuccess: addSuccess }] =
    usePostProductGroupMutation();
  const [
    updateBrand,
    { isSuccess, isError: updateIsError, error: updateError },
  ] = useUpdateProductGroupMutation();

  useEffect(() => {
    if (isError) {
      Toaster({
        type: "error",
        message: "Something went wrong",
      });
    }
    if (addSuccess) {
      Toaster({
        type: "success",
        message: "Added successfully",
      });
      setProductGroup({
        name: "",
        description: "",
      });
    }
  }, [isError, addSuccess, setProductGroup]);

  useEffect(() => {
    if (updateIsError) {
      Toaster({
        type: "error",
        message: updateError?.data,
      });
    }
    if (isSuccess) {
      Toaster({
        type: "success",
        message: "Updated successfully",
      });
      setProductGroup({
        _id: "",
        name: "",
        description: "",
      });
    }
  }, [updateIsError, updateError?.data, isSuccess, setProductGroup]);

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setProductGroup({ ...productGroup, [name]: value });
    setError({ ...error, [name]: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productGroup.name) {
      setError({
        ...error,
        name: "Name is required",
      });
      return;
    }

    if (productGroup._id) {
      return updateBrand({
        id: productGroup._id,
        body: {
          name: productGroup.name,
          description: productGroup.description,
        },
      });
    }
    addProductGroup({
      name: productGroup.name,
      description: productGroup.description,
    });
  };

  return (
    <div className="w-full mb-4 flex flex-col gap-4">
      <TextInput
        name={"name"}
        value={productGroup.name}
        onChange={handleChange}
        placeholder="Enter product group name"
        error={error.name}
      />
      <Textarea
        name={"description"}
        value={productGroup.description}
        onChange={handleChange}
        placeholder="Enter description"
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

export default AddProductGroup;
