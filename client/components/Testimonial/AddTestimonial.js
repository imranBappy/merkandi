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
import {
  usePostTestimonialMutation,
  useUpdateTestimonialMutation,
} from "@/redux/features/testimonial/testimonialApi";
import TextboxInput from "../common/Input/TextboxInput";

const AddTestimonial = ({ testimonialState }) => {
  const [error, setError] = useState({ name: "", review: "" });
  const [testimonial, setTestimonial] = testimonialState;

  const [addTestimonial, { data, isLoading, isError, isSuccess }] =
    usePostTestimonialMutation();
  const [
    updateTestimonial,
    {
      data: updateData,
      isLoading: updateLogin,
      isError: updateError,
      isSuccess: updateSuccess,
    },
  ] = useUpdateTestimonialMutation();

  useEffect(() => {
    if (isError) {
      Toaster({
        type: "error",
        message: error?.data || "Something went wrong",
      });
    }
    if (isSuccess && !isLoading && !isError) {
      Toaster({
        type: "success",
        message: "Added successfully",
      });
      setTestimonial({
        name: "",
        review: "",
      });
    }
  }, [data, isLoading, isError, error?.data, isSuccess, setTestimonial]);

  useEffect(() => {
    if (updateError) {
      Toaster({
        type: "error",
        message: updateError?.data || "Something went wrong",
      });
    }
    if (updateSuccess && !updateLogin && !updateError) {
      Toaster({
        type: "success",
        message: "Updated successfully",
      });
      setTestimonial({
        name: "",
        review: "",
      });
    }
  }, [
    updateData,
    updateLogin,
    updateError.data,
    setTestimonial,
    updateSuccess,
    updateError,
  ]);

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setTestimonial({ ...testimonial, [name]: value });
    setError({ ...error, [name]: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!testimonial.name) {
      setError({
        ...error,
        name: "Name is required",
      });
      return;
    }

    if (!testimonial.review) {
      setError({
        ...error,
        review: "Review is required",
      });
      return;
    }

    if (testimonial._id) {
      return updateTestimonial({
        id: testimonial._id,
        body: {
          name: testimonial.name,
          review: testimonial.review,
        },
      });
    }
    addTestimonial({
      name: testimonial.name,
      review: testimonial.review,
    });
  };

  return (
    <div className="w-full mb-4 flex flex-col gap-4">
      <TextInput
        name={"name"}
        value={testimonial.name}
        onChange={handleChange}
        placeholder="Enter a brand name"
        error={error.name}
      />
      <TextboxInput
        name={"review"}
        value={testimonial.review}
        onChange={handleChange}
        placeholder="Enter description"
        error={error.review}
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

export default AddTestimonial;
