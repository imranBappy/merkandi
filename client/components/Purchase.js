import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function Purchase({ link, images, title, subtitle, delivery, quantity, grade, person, price, times, kilogram, offer }) {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return isLoaded ? (
        <Link
            href={link}
            className="border hover:shadow-lg group bg-white block mx-2 md:mx-0"
        >
            <div className="flex flex-col flex-col-reverse md:flex-row justify-between p-5">
                <div className="flex flex-col justify-between w-full">
                    <div className="flex flex-col space-y-3 mb-3">
                        {title && <h1 className="text-xl text-black hover:text-[#1c6b8c] font-semibold">{title}</h1>}
                        <div className="flex flex-wrap gap-2 text-[#969696] text-sm">
                            {delivery && <p>Delivery address: {delivery}</p>}
                            {quantity && <p>Quantity searched: {quantity}</p>}
                            {grade && <p>Grade: {grade}</p>}
                            {person && <p>Only collection in person: {person}</p>}
                        </div>
                        {subtitle && <p className="text-[#525252] text-md">{subtitle}</p>}
                    </div>
                    <div className="flex items-center flex-wrap md:space-x-6 space-x-3">
                        {offer && <p className="text-rose-500">{offer}</p>}
                        {times && <p>Added: {times}</p>}
                        {price && 
                        <div className="flex items-end leading-4">
                            <b>${price}</b>
                            {kilogram && <p className="text-xs text-[#969696] pl-3">/{kilogram}</p>}
                        </div>
                        }
                    </div>
                </div>
                {images &&
                    <Image
                        width={200}
                        height={200}
                        className="w-full md:w-48 h-48 object-cover md:ml-4 mb-3 md:mb-0 "
                        src={images[0]}
                        alt={title}
                        loading="lazy"
                    />
                }
            </div>
        </Link>
        ) : (
            <div className="border hover:shadow-lg group bg-white block">
                <div className="animate-pulse flex justify-between p-4">
                    <div className="flex flex-col justify-center w-full mr-4">
                        <div className="h-4 w-full bg-slate-200 rounded mb-3"></div>
                        <div className="h-4 w-full bg-slate-200 rounded mb-3"></div>
                        <div className="h-4 w-full bg-slate-200 rounded mb-3"></div>
                        <div className="h-4 w-56 bg-slate-200 rounded"></div>
                    </div>
                    <div className="bg-slate-200 w-60 h-44"></div>
                </div>
            </div>
        );
}

export default Purchase;
  