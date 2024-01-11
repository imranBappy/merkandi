"use client";

import React from "react";
import DataTable from "react-data-table-component";
import Button from "../common/Button/Button";
import Link from "next/link";

import moment from "moment/moment";
import { useGetClicksQuery } from "@/redux/features/click/clickApi";

const ClickTable = ({ type, isCustomare = "", wholesale = "" }) => {
  const { data, isLoading } = useGetClicksQuery({
    ...(type && { type }),
    ...(isCustomare && { isCustomare }),
    ...(wholesale && { wholesale }),
  });

  const columns = [
    {
      name: "ID",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "50px",
    },
    {
      name: "Customer",
      selector: (row) => row?.customare?.name || "Anonymous",
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
      name: "Date",
      selector: (row) => moment(row?.createdAt).fromNow(),
      sortable: true,
      width: "150px",
    },
    {
      name: "Contact",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Button className={"w-22"} label={"Contact"} />
        </div>
      ),
      width: "150px",
    },
  ];

  return (
    <div>
      <h1 className="text-md font-semibold mb-2 block capitalize ">
        All {type}
      </h1>
      <DataTable
        disabled={isLoading}
        columns={columns}
        data={data?.clicks || []}
        pagination
        selectableRowsHighlight
      />
    </div>
  );
};

export default ClickTable;
