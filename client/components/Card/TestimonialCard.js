import { useState, useEffect } from "react";

function Testimonial({ title, name }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return isLoaded ? (
    <div className="p-6 border bg-white flex flex-col justify-between">
      <p className="leading-7 mb-4 text-left line-clamp-9">{title}</p>
      <div className="flex items-center">
        <div className="rounded-full border border-gray-300 w-8 h-8 flex items-center justify-center mr-2">
          <svg
            className="text-m"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 256 256"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"></path>
          </svg>
        </div>
        <p className="line-clamp-1 leading-5 italic">{name}</p>
      </div>
    </div>
  ) : (
    <div className="p-6 border bg-white">
      <div className="animate-pulse flex flex-col space-y-5">
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="flex items-center mt-4">
          <div className="rounded-full bg-slate-200 h-8 w-8 mr-2"></div>
          <div className="h-2 w-28 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
