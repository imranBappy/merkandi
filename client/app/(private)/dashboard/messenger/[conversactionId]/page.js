"use client";
import LeftUser from "@/components/LeftUser";
import Blank from "@/components/inbox/Blank";
import Sidebar from "@/components/inbox/Sidebar";
import ChatBody from "@/components/inbox/chatbody/ChatBody";
import React from "react";

const page = ({ params }) => {

  return (
    <div className="max-w-screen-xl mx-auto py-4 md:px-8">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/12">
          <LeftUser />
        </div>
        <div className="w-full md:w-9/12 pl-0 md:pl-6">
          <div className="min-w-full border rounded flex lg:grid lg:grid-cols-3">
            <Sidebar />
            <ChatBody conversactionId={params.conversactionId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
