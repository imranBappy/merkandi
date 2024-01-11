"use client";

import { useGetBrandsQuery } from "@/redux/features/brand/brandApi";
import React from "react";
import DataTable from "react-data-table-component";
import Image from "next/image";
import Button from "../common/Button/Button";
import {
  useDeleteTestimonialMutation,
  useGetTestimonialsQuery,
} from "@/redux/features/testimonial/testimonialApi";

const TestimonialTable = ({ handleEdit }) => {
  const { data, isLoading } = useGetTestimonialsQuery();
  const [deleteTestimonial, { isLoading: isDeleting }] =
    useDeleteTestimonialMutation();

  const handleDelete = (id) => {
    console.log(id);
    deleteTestimonial(id);
  };

  const columns = [
    // index by id
    {
      name: "ID",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
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
            onClick={() => handleDelete(row._id)}
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
        data={data?.testimonials || []}
        pagination
        selectableRowsHighlight
      />
    </div>
  );
};

export default TestimonialTable;
