import LeftUser from "@/components/LeftUser";
import ReceiveOrderTable from "@/components/Order/ReceiveOrderTable";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4 md:px-8">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/12">
          <LeftUser />
        </div>
        <div className="w-full md:w-9/12 pl-0 md:pl-6">
          <ReceiveOrderTable />
        </div>
      </div>
    </div>
  );
};

export default page;
