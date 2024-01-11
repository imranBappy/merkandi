"use client";
import AdminBer from "@/components/admin/AdminBer";
import AddBrand from "@/components/Brand/AddBrand";
import Brands from "@/components/Brand/Brands";
import { useState } from "react";

export default function Admin() {
  const [brand, setBrand] = useState({
    name: "",
    description: "",
    logo: "",
    banner: "",
  });

  const [logo, setLogo] = useState([]);
  const [banner, setBanner] = useState([]);

  const handleEdit = (item) => {
    setBrand({
      _id: item._id,
      name: item.name,
      description: item.description || "",
    });

    if (item.logo) {
      setLogo([item.logo]);
    }
    if (item.banner) {
      setBanner([item.banner]);
    }
  };

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
                Add New Brand
              </h1>
              <AddBrand
                brandState={[brand, setBrand]}
                logoState={[logo, setLogo]}
                bannerState={[banner, setBanner]}
              />
            </div>
            <div className="w-full md:w-3/6">
              <div>
                <Brands handleEdit={handleEdit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
