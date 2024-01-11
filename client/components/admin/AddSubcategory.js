"use client";
import React, { useEffect, useState } from "react";
import Button from "../common/Button/Button";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import Toaster from "../common/Toaster/Toaster";
import ImageManager from "../common/ImageManager";
import TextInput from "../common/Input/TextInput";
import Textarea from "../common/Input/Textarea";
import {
  usePostSubcategoryMutation,
  useUpdateSubcategoryMutation,
} from "@/redux/features/subcategory/subcategoryApi";
import SelectInput from "../common/Input/SelectInput";

const validate = (values) => {
  let errors = {};
  let isError = false;
  if (!values.name) {
    isError = true;
    errors.name = "Please enter a title";
  }
  if (!values.category) {
    isError = true;

    errors.category = "Please select a category";
  }
  return {
    isError,
    errors,
  };
};

const AddSubcategory = ({ subcategoryState, imageState }) => {
  const [error, setError] = useState({
    name: "",
    description: "",
    category: "",
  });
  const [subcategory, setSubcategory] = subcategoryState;
  const [image, setImage] = imageState;
  const [addSubcategory, { data, isLoading, isError }] =
    usePostSubcategoryMutation();
  const [
    updateSubcategory,
    { isLoading: updateLoading, error: updateError, isSuccess },
  ] = useUpdateSubcategoryMutation();

  const { data: category } = useGetCategoriesQuery();

  console.log({ category: category?.categories });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSubcategory({
      ...subcategory,
      [name]: value,
    });
    setError({
      ...error,
      [name]: "",
    });
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
        message: "Subcategory Added successfully",
      });
      setSubcategory({
        name: "",
        _id: "",
        description: "",
        category: "",
      });
      setImage([]);
    }
    //add setSubcategory, error, setImage
  }, [data, isLoading, isError, setSubcategory, error, setImage]);

  useEffect(() => {
    if (isSuccess) {
      Toaster({
        type: "success",
        message: "Subcategory updated successfully",
      });
      setSubcategory({
        name: "",
        _id: "",
        description: "",
        category: "",
      });

      setImage([]);
    } else if (updateError) {
      Toaster({
        type: "error",
        message: updateError?.data || "Something went wrong",
      });
    }
    //setSubcategory, setImage
  }, [isSuccess, updateLoading, updateError, setSubcategory, setImage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isError, errors } = validate(subcategory);
    if (isError) {
      setError(errors);
      return;
    }

    if (subcategory._id) {
      updateSubcategory({
        _id: subcategory._id,
        name: subcategory.name,
        description: subcategory.description,
        category: subcategory.category,
        image: image[0],
      });
    } else {
      addSubcategory({
        name: subcategory.name,
        description: subcategory.description,
        category: subcategory.category,
        image: image[0],
      });
    }
  };

  return (
    <div className="w-full mb-4">
      <TextInput
        name={"name"}
        label={"Name"}
        value={subcategory.name}
        onChange={handleChange}
        error={error.name}
      />
      <Textarea
        name={"description"}
        label={"Description"}
        value={subcategory.description}
        onChange={handleChange}
        error={error.description}
      />

      <SelectInput
        name={"category"}
        label={"Category"}
        value={subcategory.category}
        onChange={handleChange}
        error={error.category}
        options={category?.categories}
      />

      <ImageManager
        multiple={false}
        className={"w-full text-black   my-4 block mt-5"}
        selectedState={imageState}
      />

      <Button
        className={"w-full  "}
        // disabled={isLoading || updateLoading}
        onClick={handleSubmit}
        label={"Save"}
      />
    </div>
  );
};

export default AddSubcategory;
