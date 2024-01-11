"use client";

import { useGetBrandsQuery } from "@/redux/features/brand/brandApi";
import React from "react";
import DataTable from "react-data-table-component";
import Image from "next/image";
import Button from "../common/Button/Button";
import { useGetProductsGroupQuery } from "@/redux/features/productGroup/productGroupApi";

const ProductGroupTable = ({ handleEdit }) => {
  const { data, isLoading } = useGetProductsGroupQuery();

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
        <div className="flex items-center gap-4 ">
          <Button onClick={() => handleEdit(row)} label={"Edit"} />
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-md font-semibold mb-2 block">All Product Group</h1>
      <DataTable
        disabled={isLoading}
        columns={columns}
        data={data?.productGroups}
        pagination
        selectableRowsHighlight
      />
    </div>
  );
};

export default ProductGroupTable;
