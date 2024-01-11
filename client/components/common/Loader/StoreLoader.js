import React from "react";

const StoreLoader = () => {
  return (
    <div className="border hover:shadow-lg group bg-white block m-2">
      <div className="animate-pulse flex flex-col md:flex-row">
        <div className="bg-slate-200 h-52 w-full md:w-60"></div>
        <div className="p-4 flex flex-col w-full">
          <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
          <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
          <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
          <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
        </div>
      </div>
    </div>
  );
};

export default StoreLoader;
