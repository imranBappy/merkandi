import React, { useState } from "react";
import Horizontal from "./Horizontal";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";

function NevBer() {
  const [showNev1, setShowNev1] = useState(false);

  const { data } = useGetCategoriesQuery();
  return (
    <>
      <button onClick={() => setShowNev1(!showNev1)} className="p-1">
        <svg
          className="text-black"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      {showNev1 && (
        <div className="left-0 top-0 bottom-0 overflow-auto fixed w-72 bg-white transition duration-300 delay-600">
          <div className="flex justify-between items-start bg-[#1f8ebe] p-3">
            <div className="text-white">
              <h1 className="text-xl font-semibold mb-1">Welcome to Lot24</h1>
              <p className="text-sm font-normal mb-4">
                Wholesale trading without limits
              </p>
            </div>
            <button onClick={() => setShowNev1(!showNev1)} className="px-2">
              <svg
                className="text-center inline text-white"
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>

          {data?.categories?.map((item) => (
            <Horizontal key={item?._id} category={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default NevBer;
