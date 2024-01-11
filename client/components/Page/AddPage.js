"use client";

import React, { useEffect, useState } from "react";
import Toaster from "../common/Toaster/Toaster";
import Button from "../common/Button/Button";
import TextInput from "../common/Input/TextInput";
import Textarea from "../common/Input/Textarea";

import {
  usePostPageMutation,
  useUpdatePageMutation,
} from "@/redux/features/page/pageApi";

const AddPage = ({ pageState }) => {
  const [error, setError] = useState({ title: "", content: "", slug: "" });
  const [page, setPage] = pageState;

  const [addPage, { data, isLoading, isError, isSuccess }] =
    usePostPageMutation();
  const [
    updatePage,
    {
      data: updateData,
      isLoading: updateLogin,
      isError: updateError,
      isSuccess: updateSuccess,
    },
  ] = useUpdatePageMutation();

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
      setPage({
        title: "",
        content: "",
        slug: "",
      });
    }
  }, [data, isLoading, isError, error?.data, setPage, isSuccess]);

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
      setPage({
        title: "",
        content: "",
        slug: "",
      });
    }
  }, [updateData, updateLogin, updateError, setPage, updateSuccess]);

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setPage({ ...page, [name]: value });
    setError({ ...error, [name]: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!page.title) {
      setError({
        ...error,
        title: "Title is required",
      });
      return;
    }
    if (!page.content) {
      setError({
        ...error,
        content: "Content is required",
      });
      return;
    }

    if (page._id) {
      return updatePage({
        slug: page.slug,
        body: {
          title: page.title,
          content: page.content,
        },
      });
    }
    addPage({
      title: page.title,
      content: page.content,
      slug: page.slug,
    });
  };

  return (
    <div className="w-full mb-4 flex flex-col gap-4">
      <TextInput
        name={"title"}
        value={page.title}
        onChange={handleChange}
        placeholder="Enter  title"
        error={error.title}
      />

      <TextInput
        name={"slug"}
        value={page.slug}
        onChange={handleChange}
        placeholder="Enter slug"
        error={error.slug}
        disabled={Boolean(page._id)}
      />
      <Textarea
        name={"content"}
        value={page.content}
        onChange={handleChange}
        placeholder="Enter content"
        error={error.content}
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

export default AddPage;
