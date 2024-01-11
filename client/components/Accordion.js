"use client";
import { useState } from "react";

function Accordion({ title, children, isEnd = false }) {
  const [isOpen, setIsOpen] = useState(true); // Set the initial state to be open

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`border bg-white border-b-0 `}
      style={isEnd ? { borderBottom: "1px solid #e5e5e5" } : {}}
    >
      <div
        className={`flex justify-between items-center p-3 cursor-pointer`}
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 text-gray-500 ${
            isOpen ? "transform" : "transform rotate-[270deg]"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
}

export default Accordion;
