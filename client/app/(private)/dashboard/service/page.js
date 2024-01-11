"use client";
import React, { useEffect, useState } from 'react';
import LeftUser from "@/components/LeftUser";
import Table from "@/components/Table";

export default function Service() {
    const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
    return (
        <div className="max-w-screen-xl mx-auto py-4 md:px-8">
            <div className="flex flex-col md:flex-row items-start">
                <div className="w-full md:w-3/12">
                    <LeftUser />
                </div>
                <div className="w-full md:w-9/12 pl-0 md:pl-6">
                    <Table data={userData} />
                </div>
            </div>
        </div>
        
    )
}