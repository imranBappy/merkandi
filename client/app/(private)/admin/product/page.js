"use client";
import React, { useEffect, useState } from "react";
import AdminBer from "@/components/admin/AdminBer";
import ProductTable from "@/components/admin/ProductTable";

export default function Admin() {
  return (
    <div className="max-w-screen-xl mx-auto my-1 md:px-8">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/12">
          <AdminBer />
        </div>
        <div className="w-full md:w-9/12 pl-0 md:pl-6">
          <ProductTable />
        </div>
      </div>
    </div>
  );
}
