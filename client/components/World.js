import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from "react";

const World = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return isLoaded ? ( 
        <div className="z-0 bg-[url('/images/map.svg')] bg-no-repeat bg-cover py-8 relative">
            <div className="bg-m opacity-95 absolute inset-0 z-0"></div>
            <div className='flex flex-col md:flex-row max-w-screen-xl mx-auto md:px-8 relative items-center'>
                <div className='md:w-8/12 md:mr-8 md:p-0 p-6 w-full'>
                    <h1 className='text-2xl font-bold leading-5 mb-6 text-white'>
                        Merkandi in the world
                    </h1>
                    <div className='grid grid-cols-3 text-center gap-4'>
                        <Link
                            href="/"
                            className='flex items-center justify-start text-xl font-semibold leading-5 py-3 bg-mm text-white'
                        >
                            <Image
                                src="/flags/es.svg"
                                width={30}
                                height={23}
                                alt="Picture of the author"
                                className="mx-2"
                            />
                            Spanish
                        </Link>
                        <Link
                            href="/"
                            className='flex items-center justify-start text-xl font-semibold leading-5 py-3 bg-mm text-white'
                        >
                            <Image
                                src="/flags/de.svg"
                                width={30}
                                height={23}
                                alt="Picture of the author"
                                className="mx-2"
                            />
                            German
                        </Link>
                        <Link
                            href="/"
                            className='flex items-center justify-start text-xl font-semibold leading-5 py-3 bg-mm text-white'
                        >
                            <Image
                                src="/flags/us.svg"
                                width={30}
                                height={23}
                                alt="Picture of the author"
                                className="mx-2"
                            />
                            English
                        </Link> 
                        <Link
                            href="/"
                            className='flex items-center justify-start text-xl font-semibold leading-5 py-3 bg-mm text-white'
                        >
                            <Image
                                src="/flags/ch.svg"
                                width={30}
                                height={23}
                                alt="Picture of the author"
                                className="mx-2"
                            />
                            China
                        </Link>
                        <Link
                            href="/"
                            className='flex items-center justify-start text-xl font-semibold leading-5 py-3 bg-mm text-white'
                        >
                            <Image
                                src="/flags/tr.svg"
                                width={30}
                                height={23}
                                alt="Picture of the author"
                                className="mx-2"
                            />
                            Turkey
                        </Link>
                        <Link
                            href="/"
                            className='flex items-center justify-start text-xl font-semibold leading-5 py-3 bg-mm text-white'
                        >
                            <Image
                                src="/flags/fr.svg"
                                width={30}
                                height={23}
                                alt="Picture of the author"
                                className="mx-2"
                            />
                            French
                        </Link>
                    </div>
                </div>
                <div className='md:w-4/12 w-full md:p-0 p-6'>
                    <div className='w-full p-8  bg-white flex flex-col items-center'>
                        <Image
                            src="/images/avatar.svg"
                            width={60}
                            height={60}
                            className='mb-4'
                            alt="Picture of the author"
                        />
                        <h1 className='text-lg font-semibold leading-5 mb-3 text-black'>
                        Register on Merkandi now
                        </h1>
                        <h2 className='text-sm font-normal leading-5 mb-3 text-muted'>
                        Join the 100 000 of satisfied users now
                        </h2>
                        <div className='grid grid-cols-2 gap-3'>
                            <Link
                                href="/dashboard"
                                className="w-32 text-center bg-black text-white py-3 font-normal text-sm leading-3"
                            >
                                I want to sell
                            </Link>
                            <Link
                                href="/offers"
                                className="w-32 text-center bg-y text-white py-3 font-normal text-sm leading-3"
                            >
                                I want to buy
                            </Link>
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
    
export default World;