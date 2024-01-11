"use client";

import React from "react";
import DataTable from "react-data-table-component";
import Button from "../common/Button/Button";

import {
  useDeletePageMutation,
  useGetPagesQuery,
} from "@/redux/features/page/pageApi";

const PageTable = ({ handleEdit }) => {
  const { data, isLoading } = useGetPagesQuery({
    page: 1,
    limit: 10,
  });
  const [deleteTestimonial, { isLoading: isDeleting }] =
    useDeletePageMutation();

  const handleDelete = (slug) => {
    deleteTestimonial(slug);
  };

  const columns = [
    // index by id
    {
      name: "Slug",
      selector: "slug",
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4  ">
          <Button
            className={"w-20"}
            onClick={() => handleEdit(row)}
            label={"Edit"}
          />
          <Button
            disabled={isDeleting}
            label={"Delete"}
            onClick={() => handleDelete(row.slug)}
            className="bg-red-500 hover:bg-red-700  w-20 "
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-md font-semibold mb-2 block">All Testimonial</h1>
      <DataTable
        disabled={isLoading}
        columns={columns}
        data={data?.pages || []}
        pagination
        selectableRowsHighlight
      />
    </div>
  );
};

export default PageTable;
