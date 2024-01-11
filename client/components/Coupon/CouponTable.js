"use client";

import { useGetBrandsQuery } from "@/redux/features/brand/brandApi";
import React, { use, useEffect } from "react";
import DataTable from "react-data-table-component";
import Image from "next/image";
import Button from "../common/Button/Button";
import {
  useDeleteTestimonialMutation,
  useGetTestimonialsQuery,
} from "@/redux/features/testimonial/testimonialApi";
import {
  useDeleteCouponMutation,
  useGetCouponsQuery,
  useUpdateCouponMutation,
} from "@/redux/features/coupon/couponApi";
import Toaster from "../common/Toaster/Toaster";

const CouponTable = () => {
  const { data, isLoading } = useGetCouponsQuery();
  const [
    deleteCoupon,
    {
      isLoading: isDeleting,
      isError: isDeleteError,
      isSuccess: isDeleteSuccess,
      error: deleteError,
    },
  ] = useDeleteCouponMutation();

  const [updateCoupon, { isLoading: isUpdating, isError, isSuccess, error }] =
    useUpdateCouponMutation();

  const handleDelete = (id) => {
    deleteCoupon(id);
  };

  const handleActive = (row) => {
    updateCoupon({ id: row._id, body: { ...row, isActive: !row.isActive } });
  };

  useEffect(() => {
    if (isError) {
      Toaster({
        type: "error",
        message: error?.data || "Something went wrong",
      });
    }
    if (isSuccess && !isUpdating && !isError) {
      Toaster({
        type: "success",
        message: "Updated successfully",
      });
    }
  }, [isSuccess, isUpdating, isError, error?.data]);

  useEffect(() => {
    if (isDeleteError) {
      Toaster({
        type: "error",
        message: deleteError?.data || "Something went wrong",
      });
    }
    if (isDeleteSuccess && !isDeleting && !isDeleteError) {
      Toaster({
        type: "success",
        message: "Deleted successfully",
      });
    }
  }, [isDeleteSuccess, isDeleting, isDeleteError, deleteError?.data]);

  const columns = [
    // index by id
    {
      name: "Code",
      selector: "code",
    },
    {
      name: "Discount",
      selector: "discount",
    },
    {
      name: "Created At",
      selector: "createdAt",
      sortable: true,
      cell: (row) => new Date(row.createdAt).toLocaleDateString(),
    },
    {
      name: "Expire At",
      selector: "expireAt",
      sortable: true,
      cell: (row) => new Date(row.expireAt).toLocaleDateString(),
    },
    {
      name: "Is Active",
      cell: (row) => (
        <div className="flex items-center gap-4  ">
          <Button
            className={
              row.isActive
                ? "bg-green-500 w-20"
                : "bg-red-500 w-22 hover:bg-red-700"
            }
            disabled={isUpdating}
            onClick={() => handleActive(row)}
            label={row.isActive ? "Active" : "Inactive"}
          />
        </div>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4  ">
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
      <h1 className="text-md font-semibold mb-2 block">All Coupon</h1>
      <DataTable
        disabled={isLoading}
        columns={columns}
        data={data?.couponCodes || []}
        pagination
        selectableRowsHighlight
      />
    </div>
  );
};

export default CouponTable;
