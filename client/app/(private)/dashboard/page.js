import LeftUser from "@/components/LeftUser";
import Image from "next/image";
import Link from "next/link";
import { BsTranslate } from "react-icons/bs";
import { FcPlus } from "react-icons/fc";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-3/12">
            <LeftUser />
          </div>
          <div className="w-full md:w-9/12 pl-0 md:pl-6">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              <div className="bg-y p-4 flex flex-col justify-between space-y-3">
                <div className="flex items-start">
                  <BsTranslate
                    fontSize={45}
                    className="bg-white rounded-full p-2 mr-2 w-12 block"
                  />
                  <h1 className="text-xl text-white leading-6">
                    Make communication with your business partner easier!
                  </h1>
                </div>
                <p className="py-4 text-sm text-white">
                  Buy automatic message translations and trade with wholesalers
                  worldwide without knowing the language
                </p>
                <Link
                  href="#"
                  className="p-2 text-center mt-3 rounded bg-m hover:bg-mm text-white w-full uppercase"
                >
                  Learn more
                </Link>
              </div>
              <div className="bg-m p-4 flex flex-col justify-between space-y-3">
                <div className="flex items-start">
                  <BsTranslate
                    fontSize={45}
                    className="bg-white rounded-full p-2 mr-2 w-12"
                  />
                  <h1 className="text-xl text-white leading-6">
                    We find the goods for you
                  </h1>
                </div>
                <p className="py-4 text-sm text-white">
                  Buy automatic message translations and trade with wholesalers
                  worldwide without knowing the language
                </p>
                <Link
                  href="#"
                  className="p-2 text-center mt-3 rounded bg-y hover:bg-mm text-white w-full uppercase"
                >
                  Learn more
                </Link>
              </div>
              <div className="bg-white p-4 flex flex-col justify-between space-y-3">
                <div className="flex items-start">
                  <BsTranslate
                    fontSize={45}
                    className="bg-m text-white rounded-full p-2 mr-2 w-12"
                  />
                  <h1 className="text-xl text-black leading-6">
                    Get access to the best offers
                  </h1>
                </div>
                <p className="py-4 text-sm text-black">
                  Buy automatic message translations and trade with wholesalers
                  worldwide without knowing the language
                </p>
                <Link
                  href="#"
                  className="p-2 text-center mt-3 rounded bg-y hover:bg-mm text-white w-full uppercase"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
              <div className="bg-white p-4 flex flex-col space-y-4">
                <h1 className="text-m text-xl font-bold">
                  Purchase access to Exclusive Offers
                </h1>
                <p>
                  Hits and bestsellers, brands sought after by consumers around
                  the world. Goods are sought every day by millions of consumers
                  in every country. The Exclusive Offers section offers you such
                  suggestions.
                </p>
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold text-red-500 mr-2">
                    68.90 EUR
                  </h1>
                  <h1 className="text-2xl font-bold text-gray-400"> + VAT</h1>
                </div>
                <Link
                  href="/dashboard"
                  className="w-20 bg-m hover:bg-mm text-white  px-4 py-2 font-bold text-base"
                >
                  Order
                </Link>
              </div>
              <div className="bg-m p-4 flex flex-col justify-between relative overflow-hidden">
                <Image
                  src="/images/rocket.svg"
                  width={300}
                  height={250}
                  alt="Picture of the author"
                  className="absolute bottom-0 -right-24 z-0"
                />
                <div className="z-10 space-y-3 flex flex-col">
                  <h1 className="text-white text-xl font-bold">
                    Unlock the full potential of Merkandi!
                  </h1>
                  <p className="text-white">
                    Upgrade to the <b>PREMIUM</b> account and enjoy a variety of
                    benefits to take your business to the next level.
                  </p>
                  <div className="flex items-center">
                    <FcPlus fontSize={30} />
                    <p className="text-white ml-2">
                      <b>Support from a personal advisor</b>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FcPlus fontSize={30} />
                    <p className="text-white ml-2">
                      <b className="mr-2">Increased security for</b>
                      transactions by accessing opinions about wholesalers
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FcPlus fontSize={30} />
                    <p className="text-white ml-2">
                      <b className="mr-2">Highlighting your offers</b>
                      across Europe
                    </p>
                  </div>
                  <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-red-500 mr-2">
                      98.90 EUR
                    </h1>
                    <h1 className="text-2xl font-bold text-white"> + VAT</h1>
                  </div>

                  <Link
                    href="/dashboard"
                    className="w-full text-center bg-y hover:bg-yy text-white font-normal px-4 py-2 text-base uppercase"
                  >
                    Switch to PREMIUM
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
