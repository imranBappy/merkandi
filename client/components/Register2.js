"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";

function Register2() {
  const [activeButton, setActiveButton] = useState("button1");
  const showFirst = activeButton === "button1" || activeButton === "button2";
  const showSecond = activeButton === "button1";
  const showThird = activeButton === "button2";
  return (
    <>
      <div className="flex items-stretch">
        <button
          onClick={() => setActiveButton("button1")}
          className={`w-full px-4 py-2 ${
            activeButton === "button1"
              ? "border-b-4 border-blue-500"
              : "border-b-4 border-white bg-white"
          }`}
        >
          <h1 className="text-3xl uppercase font-extrabold">premium</h1>
          <span className="text-blue-500 text-xs leading-normal uppercase">
            80% of our clients choose this package!
          </span>
        </button>
        <button
          onClick={() => setActiveButton("button2")}
          className={`w-full px-4 py-2 ${
            activeButton === "button2"
              ? "border-b-4 border-blue-500"
              : "border-b-4 border-white bg-white"
          }`}
        >
          <h1 className="text-2xl uppercase font-medium">standard</h1>
        </button>
      </div>
      {showSecond && (
        <div className="bg-white py-6 px-4">
          <div className="my-2 text-center">
            <p className="text-gray-400 line-through text-2xl mb-3">
              EUR 279.00
              <small className="text-muted font-normal">+VAT</small>
            </p>
            <span className="mb-2 inline-block bg-red-500 text-white py-1 px-3 rounded">
              -20%
            </span>
            <br />
            <span className="text-red-500 text-2xl font-bold">EUR 223.20</span>
            <small className="text-gray-400 ml-1 text-sm">+VAT / 1 year</small>
          </div>
          <p className="text-sm text-gray-400 mb-3 text-center">
            These are net prices, which are subject to VAT rate in line with EU
            directive.
          </p>
          <Link href="/register/create?plan=premium">
            <p className="bg-yellow-500 text-white w-full py-2 px-4 block text-center font-bold text-2xl uppercase rounded">
              Register
            </p>
          </Link>
        </div>
      )}
      {showThird && (
        <div className="bg-white py-6 px-4">
          <div className="my-2 text-center">
            <p className="text-gray-400 line-through text-2xl mb-3">
              EUR 199.00
              <small className="text-muted font-normal">+VAT</small>
            </p>
            <span className="mb-2 inline-block bg-red-500 text-white py-1 px-3 rounded">
              -20%
            </span>
            <br />
            <span className="text-red-500 text-2xl font-bold">EUR 159.20</span>
            <small className="text-gray-400 ml-1 text-sm">+VAT / 1 year</small>
          </div>
          <p className="text-sm text-gray-400 mb-3 text-center">
            These are net prices, which are subject to VAT rate in line with EU
            directive.
          </p>
          <Link href="/register/create?plan=premium">
            <p className="bg-yellow-500 text-white w-full py-2 px-4 block text-center font-bold text-2xl uppercase rounded">
              Register
            </p>
          </Link>
        </div>
      )}

      <div className="flex items-center space-x-4 bg-[#ccf0d1] py-4 px-2">
        <Image src="images/ratings-green.svg" alt="" width={100} height={100} />
        <div className="text-left">
          <p className="font-bold text-green-500 text-2xl mb-2">
            99% <span>Satisfied users</span>
          </p>
          <p className="text-sm">
            Effectiveness of Merkandi confirmed by users from all over the world
          </p>
        </div>
      </div>

      <div className="w-full">
        <h1 className="text-xl text-m p-2 border-b-4 border-[#0066a1] text-center font-bold">
          International purchases
        </h1>
        <div className="flex items-center justify-between p-2">
          {showFirst && <h1>Unlimited number of inquiries to send.</h1>}
          {showSecond && (
            <BiCheckCircle className="text-green-500 w-12" fontSize={30} />
          )}
          {showThird && (
            <BiCheckCircle className="text-green-500 w-12" fontSize={30} />
          )}
        </div>
        <div className="flex items-center justify-between p-2 bg-white">
          {showFirst && <h1>Access to the wholesalers contact details. </h1>}
          {showSecond && (
            <BiCheckCircle className="text-green-500 w-12" fontSize={30} />
          )}
          {showThird && (
            <BiCheckCircle className="text-green-500 w-12" fontSize={30} />
          )}
        </div>
        <div className="flex items-center justify-between p-2">
          {showFirst && <h1>Daily newsletter with the latest offers.</h1>}
          {showSecond && (
            <BiCheckCircle className="text-green-500 w-12" fontSize={30} />
          )}
          {showThird && (
            <BiCheckCircle className="text-green-500 w-12" fontSize={30} />
          )}
        </div>
        <div className="flex items-center justify-between p-2 bg-white">
          {showFirst && (
            <h1>Offers from 150 countries, up to 90% off regular prices. </h1>
          )}
          {showSecond && (
            <BiCheckCircle className="text-green-500 w-16" fontSize={30} />
          )}
          {showThird && (
            <BiCheckCircle className="text-green-500 w-16" fontSize={30} />
          )}
        </div>
        <div className="flex items-center justify-between p-2">
          {showFirst && <h1>Possibility to publish purchase offers</h1>}
          {showSecond && (
            <BiCheckCircle className="text-green-500 w-12" fontSize={30} />
          )}
          {showThird && (
            <BiCheckCircle className="text-green-500 w-12" fontSize={30} />
          )}
        </div>
        <div className="flex items-center justify-between p-2 bg-white">
          {showFirst && (
            <h1>An account to manage your settings, contacts and offers.</h1>
          )}
          {showSecond && (
            <BiCheckCircle className="text-green-500 w-16" fontSize={30} />
          )}
          {showThird && (
            <BiCheckCircle className="text-green-500 w-16" fontSize={30} />
          )}
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-xl text-m p-2 border-b-4 border-[#0066a1] text-center font-bold">
          Increased security
        </h1>
        <div className="flex items-center justify-between p-2">
          {showFirst && <h1>Access to the opinions about the wholesalers. </h1>}
          {showSecond && (
            <BiCheckCircle className="text-green-500 w-12" fontSize={30} />
          )}
          {showThird && (
            <BiXCircle className="text-rose-500 w-12" fontSize={30} />
          )}
        </div>
        <div className="flex items-center justify-between p-2 bg-white">
          {showFirst && <h1>Access to the blacklist of wholesalers.</h1>}
          {showSecond && (
            <BiCheckCircle className="text-green-500 w-12" fontSize={30} />
          )}
          {showThird && (
            <BiXCircle className="text-rose-500 w-12" fontSize={30} />
          )}
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-xl text-m p-2 border-b-4 border-[#0066a1] text-center font-bold">
          International Sales
        </h1>
        <div className="flex items-center justify-between p-2">
          {showFirst && (
            <h1>
              Listing unlimited number of offers- after a positive verification
              of your company
            </h1>
          )}
          {showSecond && (
            <BiCheckCircle className="text-green-500 w-16" fontSize={30} />
          )}
          {showThird && (
            <BiXCircle className="text-rose-500 w-16" fontSize={30} />
          )}
        </div>
        <div className="flex items-center justify-between p-2 bg-white">
          {showFirst && <h1>Promoting your offers all across Europe.</h1>}
          {showSecond && (
            <BiCheckCircle className="text-green-500 w-10" fontSize={30} />
          )}
          {showThird && (
            <BiXCircle className="text-rose-500 w-10" fontSize={30} />
          )}
        </div>
        <div className="flex items-center justify-between p-2">
          {showFirst && (
            <h1>Listing your company in Merkandi international catalogue.</h1>
          )}
          {showSecond && (
            <BiCheckCircle className="text-green-500 w-12" fontSize={30} />
          )}
          {showThird && (
            <BiXCircle className="text-rose-500 w-12" fontSize={30} />
          )}
        </div>
        <div className="flex items-center justify-between p-2 bg-white">
          {showFirst && (
            <h1>Creation of a multilingual profile of your company</h1>
          )}
          {showSecond && (
            <BiCheckCircle className="text-green-500 w-12" fontSize={30} />
          )}
          {showThird && (
            <BiXCircle className="text-rose-500 w-12" fontSize={30} />
          )}
        </div>
        <div className="flex items-center justify-between p-2">
          {showFirst && (
            <h1>
              Advanced statistics of your offers and your companys profile
              views.
            </h1>
          )}
          {showSecond && (
            <BiCheckCircle className="text-green-500 w-16" fontSize={30} />
          )}
          {showThird && (
            <BiXCircle className="text-rose-500 w-16" fontSize={30} />
          )}
        </div>
        <div className="flex items-center justify-between p-2 bg-white">
          {showFirst && <h1>Import/Export offers to CSV, XLS, XML files. </h1>}
          {showSecond && (
            <BiCheckCircle className="text-green-500 w-12" fontSize={30} />
          )}
          {showThird && (
            <BiXCircle className="text-rose-500 w-12" fontSize={30} />
          )}
        </div>
        <div className="flex items-center justify-between p-2">
          {showFirst && <h1>The assistance of personal adviser.</h1>}
          {showSecond && (
            <BiCheckCircle className="text-green-500 w-12" fontSize={30} />
          )}
          {showThird && (
            <BiXCircle className="text-rose-500 w-12" fontSize={30} />
          )}
        </div>
      </div>
    </>
  );
}
export default Register2;
