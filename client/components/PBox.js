import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function PBox({ link, title, images, price }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return isLoaded ? (
    <Link href={link} className="border hover:shadow-lg group bg-white block">
      <div className="relative">
        <Image
          width={300}
          height={300}
          className="w-full h-48 object-cover"
          src={images[0]}
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="p-4 bg-white flex items-center flex-col">
        <h1 className="mb-2 text-md font-normal hover:text-mm group-hover:text-mm leading-5">
          {title}
        </h1>
        <p className="bg-red-500 text-sm inline-flex p-1 text-white">
          ${price.toFixed(2)}
        </p>
      </div>
    </Link>
  ) : (
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
}

export default PBox;
