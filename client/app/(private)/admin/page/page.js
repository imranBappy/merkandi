"use client";
import AdminBer from "@/components/admin/AdminBer";
import AddBrand from "@/components/Brand/AddBrand";
import Brands from "@/components/Brand/Brands";
import AddPage from "@/components/Page/AddPage";
import PageTable from "@/components/Page/PageTable";
import { useState } from "react";

export default function PagePage() {
  const [page, setPage] = useState({
    title: "",
    content: "",
    slug: "",
  });

  const handleEdit = (item) => {
    setPage({
      _id: item._id,
      title: item.title,
      content: item.content || "",
      slug: item.slug,
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto my-1 md:px-8">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/12">
          <AdminBer />
        </div>
        <div className="w-full md:w-9/12 pl-0 md:pl-6">
          <div className="flex flex-col  items-start">
            <div className="w-full  pr-0 md:mr-8">
              <h1 className="text-md font-semibold mb-2 block">Add New Page</h1>
              <AddPage pageState={[page, setPage]} />
            </div>
            <div className="w-full ">
              <div>
                <PageTable handleEdit={handleEdit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
