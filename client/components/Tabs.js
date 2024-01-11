"use client";
import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleTabHover = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='flex flex-col-reverse items-center'>
      <div className="hidden md:flex justify-between w-full">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab p-1 w-full ${activeTab === index ? 'active bg-y text-white' : ''}`}
            onClick={() => handleTabClick(index)}
            onMouseOver={() => handleTabHover(index)}
          >
            {tab.tab}
          </button>
        ))}
      </div>

      <div className="md:hidden flex justify-between w-full">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab p-1 w-full ${activeTab === index ? 'active bg-y text-white' : ''}`}
            onClick={() => handleTabClick(index)}
            onMouseOver={() => handleTabHover(index)}
          >
            {tab.tab}
          </button>
        ))}
      </div>
      {tabs[activeTab] && (
        <div className='p-2'>
          <div>{tabs[activeTab].content}</div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
