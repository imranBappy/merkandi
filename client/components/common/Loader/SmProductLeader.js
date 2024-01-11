import React from "react";

const SmProductLeader = () => {
  return (
    <div className="border hover:shadow-lg group bg-white block">
      <div className="animate-pulse">
        <div className="bg-slate-200 h-52 w-full"></div>
        <div className="p-4 flex flex-col justify-center">
          <div className="h-4 w-full bg-slate-200 rounded mb-1"></div>
          <div className="h-4 w-full bg-slate-200 rounded mb-1"></div>
          <div className="h-4 w-full bg-slate-200 rounded mb-1"></div>
          <div className="h-4 w-14 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SmProductLeader;
