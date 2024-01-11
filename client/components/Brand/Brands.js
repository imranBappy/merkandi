"use client";

import { useGetBrandsQuery } from "@/redux/features/brand/brandApi";
import React from "react";
import DataTable from "react-data-table-component";
import Image from "next/image";
import Button from "../common/Button/Button";

const Brands = ({ handleEdit }) => {
  const { data, isLoading } = useGetBrandsQuery();

  const columns = [
    // index by id
    {
      name: "ID",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Logo",
      cell: (row) => (
        <div className="flex items-center gap-4 ">
          <Image
            width={40}
            height={40}
            src={row?.logo?.url}
            alt={row?.logo?.name}
            className="w-10 h-10 rounded-full"
          />
        </div>
      ),
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },

    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4 ">
          <Button onClick={() => handleEdit(row)} label={"Edit"} />
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-md font-semibold mb-2 block">All Brand</h1>
      <DataTable
        disabled={isLoading}
        columns={columns}
        data={data?.brands || []}
        pagination
        selectableRowsHighlight
      />
    </div>
  );
};

export default Brands;
