"use client";
import AdminBer from "@/components/admin/AdminBer";
import AddProductGroup from "@/components/ProductGroup/AddProductGroup";
import ProductGroupTable from "@/components/ProductGroup/ProductGroupTable";
import { useState } from "react";

export default function ProductGroupPage() {
  const [productGroup, setProductGroup] = useState({
    _id: "",
    name: "",
    description: "",
  });

  const handleEdit = (item) => {
    setProductGroup({
      _id: item._id,
      name: item.name,
      description: item.description || "",
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto my-1 md:px-8">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/12">
          <AdminBer />
        </div>
        <div className="w-full md:w-9/12 pl-0 md:pl-6 mt-3">
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-3/6 pr-0 md:mr-8">
              <h1 className="text-md font-semibold mb-2 block">
                Add New Product Group
              </h1>
              <AddProductGroup
                productGroupState={[productGroup, setProductGroup]}
              />
            </div>
            <div className="w-full md:w-3/6">
              <ProductGroupTable handleEdit={handleEdit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
