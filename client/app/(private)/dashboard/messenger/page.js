"use client";
import LeftUser from "@/components/LeftUser";
import Blank from "@/components/inbox/Blank";
import Sidebar from "@/components/inbox/Sidebar";
import Messenger from "@/components/seller/Messenger";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const users = [
  {
    id: 1,
    name: "HeRa",
    avatar: "/users.jpg",
    status: "Online",
    address: "503 Broadway",
    city: "New York",
    country: "USA",
    position: "Warehouse Manager",
    phone: "+1 (646) 123-1234",
    email: "glyon@instock.com",
  },
  {
    id: 2,
    name: "HeRa Khan",
    avatar: "/user.jpg",
    status: "Offline",
    address: "503 Broadway",
    city: "New York",
    country: "USA",
    position: "Warehouse Manager",
    phone: "+1 (646) 123-1234",
    email: "glyon@instock.com",
  },
];

export default function Home() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto py-4 md:px-8">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/12">
          <LeftUser />
        </div>
        <div className="w-full md:w-9/12 pl-0 md:pl-6">
          <div className="min-w-full border rounded flex lg:grid lg:grid-cols-3">
            <Sidebar />
            <div className="w-full lg:col-span-2 lg:block">
              <div className="w-full grid conversation-row-grid">
                <Blank />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
