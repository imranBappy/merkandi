"use client";

import React from "react";
import DataTable from "react-data-table-component";
import Image from "next/image";
import Button from "../common/Button/Button";
import { useGetCountriesQuery } from "@/redux/features/country/countryApi";

const Country = ({ handleEdit }) => {
  const { data, isLoading } = useGetCountriesQuery();

  const columns = [
    // index by id
    {
      name: "Flag",
      cell: (row) => (
        <div className="flex items-center gap-4 ">
          <Image
            style={{ objectFit: "contain" }}
            width={40}
            height={40}
            src={row?.flag?.url}
            alt={row?.flag?.name}
            className="w-10 h-10 "
            loading="lazy"
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
      <h1 className="text-md font-semibold my-2 block">All Country</h1>
      <DataTable
        disabled={isLoading}
        columns={columns}
        data={data?.countries || []}
        pagination
        selectableRowsHighlight
      />
    </div>
  );
};

export default Country;
