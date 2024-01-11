"use client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import AdminBer from "@/components/admin/AdminBer";
import Button from "@/components/common/Button/Button";
import { useGetSubcategoriesQuery } from "@/redux/features/subcategory/subcategoryApi";
import AddSubcategory from "@/components/admin/AddSubcategory";
import Image from "next/image";

export default function Admin() {
  const { data } = useGetSubcategoriesQuery();
  const [subcategory, setSubcategory] = useState({
    _id: "",
    name: "",
    description: "",
    category: "",
  });

  const [image, setImage] = useState([]);

  const handleEdit = (item) => {
    setSubcategory({
      _id: item._id,
      name: item.name,
      description: item.description || "",
      category: item.category._id,
    });
    if (item.image) {
      setImage([item.image]);
    }
  };

  const columns = [
    // image
    {
      name: "Image",
      cell: (row) => (
        <div className="flex items-center gap-4 ">
          <Image
            width={40}
            height={40}
            src={row?.image?.url}
            alt={row?.image?.name}
            className="w-10 h-10 rounded-full"
          />
        </div>
      ),
    },
    {
      name: "Category",
      selector: "category.name",
      sortable: true,
    },
    {
      name: "Subcategory",
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
    <div className="max-w-screen-xl mx-auto my-1 md:px-8">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/12">
          <AdminBer />
        </div>
        <div className="w-full md:w-9/12 pl-0 md:pl-6">
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-3/6 pr-0 md:mr-8">
              <h1 className="text-md font-semibold mb-2 block">
                Add New Subcategory
              </h1>
              <AddSubcategory
                subcategoryState={[subcategory, setSubcategory]}
                imageState={[image, setImage]}
              />
            </div>
            <div className="w-full md:w-3/6">
              <div>
                <h1 className="text-md font-semibold mb-2 block">
                  All Subcategory
                </h1>
                <DataTable
                  columns={columns}
                  data={data?.data || []}
                  pagination
                  selectableRowsHighlight
                  handleEdit={handleEdit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
