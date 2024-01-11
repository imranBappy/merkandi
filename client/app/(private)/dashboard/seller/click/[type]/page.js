"use client";

import ClickTable from "@/components/Click/ClickTable";
import LeftUser from "@/components/LeftUser";
import { useEffect, useState } from "react";

const ClickPage = ({ params }) => {
  const [type, setType] = useState("");

  useEffect(() => {
    setType(params.type);
  }, [params]);

  return (
    <div className="max-w-screen-xl mx-auto py-4 md:px-8">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/12">
          <LeftUser />
        </div>
        <div className="w-full md:w-9/12 pl-0 md:pl-6">
          <ClickTable type={type} />
        </div>
      </div>
    </div>
  );
};

export default ClickPage;
