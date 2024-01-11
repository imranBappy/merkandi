"use client";
import React, { useEffect, useState } from "react";
import LeftUser from "@/components/LeftUser";
import ProductTable from "@/components/admin/ProductTable";
import { useSelector } from "react-redux";
export default function Seller() {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="max-w-screen-xl mx-auto py-4 md:px-8">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/12">
          <LeftUser />
        </div>
        <div className="w-full md:w-9/12 pl-0 md:pl-6">
          <ProductTable user={auth?.data?._id} />
        </div>
      </div>
    </div>
  );
}
