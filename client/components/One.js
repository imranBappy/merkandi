import Link from "next/link";
import { useState, useEffect } from "react";

function One() {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return isLoaded ? (
        <div className="hidden md:block">
            <div className='flex gap-4 my-6'>
                <div className='w-3/6 bg-[#e2e9ef]'>
                <div className=' w-full p-3'>
                    <h2 className='text-black text-2xl font-bold mb-2'>Popular searches</h2>
                    <div className='flex flex-wrap gap-2'>
                    <Link
                        href="/login"
                        className="bg-white text-[#666] hover:text-black px-3 py-1"
                    >
                        Samsung Galaxy S10 wholesale
                    </Link>
                    <Link
                        href="/login"
                        className="bg-white text-[#666] hover:text-black px-3 py-1"
                    >
                        Wholesale heels
                    </Link>
                    <Link
                        href="/login"
                        className="bg-white text-[#666] hover:text-black px-3 py-1"
                    >
                        iphone 8
                    </Link>
                    <Link
                        href="/login"
                        className="bg-white text-[#666] hover:text-black px-3 py-1"
                    >
                        Wholesale jordans
                    </Link>
                    <Link
                        href="/login"
                        className="bg-white text-[#666] hover:text-black px-3 py-1"
                    >
                        Wholesale kids clothing
                    </Link>
                    <Link
                        href="/login"
                        className="bg-white text-[#666] hover:text-black px-3 py-1"
                    >
                        Wholesale work boots
                    </Link>
                    </div>
                </div>
                </div>
                <div className='w-3/6 bg-m'>
                <div className=' px-2 py-3'>
                    <div className='flex items-start py-4 px-3'>
                    <h1 className='text-white text-7xl mr-2 font-bold'>#1</h1>
                    <div className='flex flex-col'>
                        <h1 className='text-white text-2xl mr-2 font-bold mb-1'>#1 Platform since 2008</h1>
                        <p className='text-[#ffffff80] text-lg leading-6 font-normal	'>On the wholesale market of liquidation stocks, surplus stocks and bankrupt stocks</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        ) : (
            <div className="border block">
                <div className="animate-pulse">
                    <div className="p-2 flex">
                        <div className="h-[176px] w-full bg-slate-200 rounded mr-2"></div>
                        <div className="h-[176px] w-full bg-slate-200 rounded ml-2"></div>
                    </div>
                </div>
            </div>
        );
    }
    
    export default One;