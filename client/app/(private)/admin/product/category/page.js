"use client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import AdminBer from "@/components/admin/AdminBer";
import AddCategory from "@/components/admin/AddCategory";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import Button from "@/components/common/Button/Button";
import Image from "next/image";

export default function Admin() {
  const { data } = useGetCategoriesQuery();
  const [category, setCategory] = useState({
    _id: "",
    name: "",
    description: "",
  });
  const [image, setImage] = useState([]);

  const handleEdit = (item) => {
    setCategory({
      _id: item._id,
      name: item.name,
      description: item.description || "",
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
            //add next image and width, height
            width={40}
            height={40}
            src={row.image?.url}
            alt={row.image?.name}
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
    <div className="max-w-screen-xl mx-auto my-1 md:px-8">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/12">
          <AdminBer />
        </div>
        <div className="w-full md:w-9/12 pl-0 md:pl-6">
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-3/6 pr-0 md:mr-8">
              <h1 className="text-md font-semibold mb-2 block">
                Add New Category
              </h1>
              <AddCategory
                categoryState={[category, setCategory]}
                imageState={[image, setImage]}
              />
            </div>
            <div className="w-full md:w-3/6">
              <div>
                <h1 className="text-md font-semibold mb-2 block">
                  All Categories
                </h1>
                <DataTable
                  columns={columns}
                  data={data?.categories || []}
                  pagination
                  selectableRowsHighlight
                  handleEdit={handleEdit}
                />
              </div>
              {/* <div className="mt-5">
                <h1 className="text-md font-semibold mb-2 block">
                  All Subcategory
                </h1>
                {shouldRender && (
                  <DataTable
                    columns={columns}
                    data={subCategory?.data || []}
                    pagination
                    selectableRows
                    selectableRowsHighlight
                  />
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
