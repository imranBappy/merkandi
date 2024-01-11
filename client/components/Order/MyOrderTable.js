"use client";
import { useGetOrdersQuery } from "@/redux/features/order/orderApi";
import React from "react";
import DataTable from "react-data-table-component";
import moment from "moment";
import Link from "next/link";
import Button from "../common/Button/Button";

const MyOrderTable = () => {
  const { data, isLoading, isError, error } = useGetOrdersQuery();

  const columns = [
    {
      name: "ID",
      selector: (row, index) => index + 1,
      width: "50px",
    },
    {
      name: "Owner",
      selector: (row) => row?.owner?.name || "Anonymous",
      width: "150px",
    },
    {
      name: "Product",
      selector: (row) => (
        <Link className=" text-blue-700" href={`/product/${row?.product?._id}`}>
          {row?.product?.title}
        </Link>
      ),
      width: "250px",
    },
    {
      name: "Quantity",
      selector: (row) => row?.quantity,
      width: "150px",
    },
    {
      name: "Status",
      selector: (row) => row?.status,
      width: "150px",
    },
    {
      name: "Date",
      selector: (row) => moment(row?.createdAt).fromNow(),
      width: "150px",
    },
    {
      name: "Contact",
      cell: (row) => (
        <div className="flex items-center gap-1 flex-col py-2">
          <Link href={`/dashboard/shopping/${row?._id}`}>
            <Button
              className={"w-22 bg-zinc-600 hover:bg-zinc-900 "}
              label={"Show"}
            />
          </Link>
          <Button className={"w-22"} label={"Chat"} />
        </div>
      ),
      width: "150px",
    },
  ];

  return (
    <div>
      <h1 className="text-md font-semibold mb-2 block capitalize ">
        My Orders
      </h1>
      <DataTable
        disabled={isLoading}
        columns={columns}
        data={data?.orders || []}
        pagination
      />
    </div>
  );
};

export default MyOrderTable;
