"use client";
import React, { useEffect, useState } from "react";
import Button from "../common/Button/Button";
import {
  usePostCategoryMutation,
  useUpdateCategoryMutation,
} from "@/redux/features/category/categoryApi";
import Toaster from "../common/Toaster/Toaster";
import ImageManager from "../common/ImageManager";
import TextInput from "../common/Input/TextInput";
import Textarea from "../common/Input/Textarea";
const AddCategory = ({ categoryState, imageState }) => {
  const [error, setError] = useState("");
  const [imageError, setImageError] = useState("");
  const [category, setCategory] = categoryState;
  const [image, setImage] = imageState;
  const [addCategory, { data, isLoading, isError }] = usePostCategoryMutation();
  const [
    updateCategory,
    { isLoading: updateLoading, error: updateError, isSuccess },
  ] = useUpdateCategoryMutation();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCategory({
      ...category,
      [name]: value,
    });
    setError("");
  };

  useEffect(() => {
    if (isError) {
      Toaster({
        type: "error",
        message: error?.data || "Something went wrong",
      });
    }
    if (data?.success && !isLoading && !isError) {
      Toaster({
        type: "success",
        message: "Category Added successfully",
      });
      setCategory({
        name: "",
        _id: "",
        description: "",
      });
      setImage([]);
    }
    //add setCategory, error, setImage
  }, [data, isLoading, isError, setCategory, error, setImage]);

  useEffect(() => {
    if (isSuccess) {
      Toaster({
        type: "success",
        message: "Category updated successfully",
      });
      setCategory({
        name: "",
        _id: "",
        description: "",
      });

      setImage([]);
    } else if (updateError) {
      Toaster({
        type: "error",
        message: updateError?.data || "Something went wrong",
      });
    }
    //add updateError, setCategory, setImage
  }, [isSuccess, updateError, setCategory, setImage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category.name) {
      setError("Please enter a title");
      return;
    }
    if (!image[0]) {
      setImageError("Please select an image");
      return;
    }
    setImageError("");

    if (category._id) {
      updateCategory({
        id: category._id,
        body: {
          name: category.name,
          image: image[0],
          description: category.description,
        },
      });
      return;
    }
    addCategory({
      name: category.name,
      image: image[0],
      description: category.description,
    });
  };

  return (
    <div className="w-full mb-4">
      <TextInput
        name={"name"}
        label={"Name"}
        value={category.name}
        onChange={handleChange}
        error={error}
      />
      <Textarea
        label={"Description"}
        value={category.description}
        onChange={handleChange}
        name={"description"}
      />

      <div className=" my-4 block mt-5">
        <ImageManager
          multiple={false}
          className={"w-full text-black "}
          selectedState={imageState}
          error={imageError}
        />
      </div>

      <Button
        className={"w-full  "}
        disabled={isLoading || updateLoading}
        onClick={handleSubmit}
        label={"Save"}
      />
    </div>
  );
};

export default AddCategory;
