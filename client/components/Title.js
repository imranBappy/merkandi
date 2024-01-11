import Link from "next/link";
import { useState, useEffect } from "react";

function Title({ title, name, link }) {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return isLoaded ? (
            <div className='flex items-center justify-between max-w-screen-xl mx-auto my-4 md:px-8'>
                <h1 className='text-2xl font-bold leading-8 text-black'>{title}</h1>
                <Link
                    href={link}
                    className="flex items-center font-normal leading-3 text-sm text-[#299bcc]"
                >
                    {name &&
                        <div className="flex items-center">
                            <p>{name}</p>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M 9.09375 4.78125 L 7.6875 6.21875 L 17.46875 16 L 7.6875 25.78125 L 9.09375 27.21875 L 20.3125 16 Z M 16.09375 4.78125 L 14.6875 6.21875 L 24.46875 16 L 14.6875 25.78125 L 16.09375 27.21875 L 27.3125 16 Z"></path></svg>
                        </div>
                    }
                </Link>
            </div>
        ) : (
            <div className="max-w-screen-xl mx-auto my-4 md:px-8">
                <div className="animate-pulse flex items-center justify-between">
                    <div className="h-5 w-56 bg-slate-200 rounded"></div>
                    <div className="flex items-center mt-4">
                        <div className="h-5 w-20 bg-slate-200 rounded mr-2"></div>
                        <div className="bg-slate-200 h-5 w-5"></div>
                    </div>
                </div>
            </div>
        );
}

export default Title;