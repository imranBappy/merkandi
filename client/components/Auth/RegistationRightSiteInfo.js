import React from "react";
import { BiCheck } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const RegistationRightSiteInfo = () => {
  return (
    <div className="w-full md:w-1/3">
      <div className={`w-full md:block md:border-r showStandard`}>
        <div className="border bg-white p-4 space-y-1">
          <button className="md:hidden block absolute right-4 top-4">
            <svg
              className="text-center inline text-black"
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <h6 className="text-y font-semibold uppercase">STANDARD</h6>
          <del className="text-[#969696] text-md notranslate text-line-through">
            EUR 199.00
            <small className="text-muted font-normal">+VAT</small>
          </del>
          <span className="bg-rose-500 text-white">-20%</span>
          <br />
          <span className="text-2xl font-semibold uppercase">
            EUR 159.20
            <small className="text-[#969696] font-normal">+VAT</small>
          </span>
          <small className="text-[#969696]">/ 1 year</small>
          <p className="small text-[#969696]">
            These are net prices, which are subject to VAT rate in line with EU
            directive.
          </p>
          <p className="inline-flex">
            <BiCheck className="fill-green-500" fontSize={30} />
            Unlimited number of inquiries to send.
          </p>
          <p className="inline-flex">
            <BiCheck className="fill-green-500" fontSize={30} />
            Access to the wholesalers contact details.
          </p>
          <p className="inline-flex">
            <BiCheck className="fill-green-500" fontSize={30} />
            Daily newsletter with the latest offers.
          </p>
          <p className="inline-flex">
            <BiCheck className="fill-green-500" fontSize={30} />
            Offers from 150 countries, up to 90% off regular prices.
          </p>
          <p className="inline-flex">
            <BiCheck className="fill-green-500" fontSize={30} />
            Possibility to publish purchase offers
          </p>
          <p className="inline-flex">
            <BiCheck className="fill-green-500" fontSize={30} />
            An account to manage your settings, contacts and offers.
          </p>
          <p className="inline-flex">
            <AiOutlineClose className="fill-rose-500 mr-1" fontSize={20} />
            Access to the opinions about the wholesalers.
          </p>
          <p className="inline-flex">
            <AiOutlineClose className="fill-rose-500 mr-1" fontSize={20} />
            Access to the blacklist of wholesalers.
          </p>
          <p className="inline-flex">
            <AiOutlineClose className="fill-rose-500 mr-1" fontSize={20} />
            Listing unlimited number of offers- after a positive verification of
            your company
          </p>
          <p className="inline-flex">
            <AiOutlineClose className="fill-rose-500 mr-1" fontSize={20} />
            Promoting your offers all across Europe.
          </p>
          <p className="inline-flex">
            <AiOutlineClose className="fill-rose-500 mr-1" fontSize={20} />
            Listing your company in Merkandi international catalogue.
          </p>
          <p className="inline-flex">
            <AiOutlineClose className="fill-rose-500 mr-1" fontSize={20} />
            Creation of a multilingual profile of your company
          </p>
          <p className="inline-flex">
            <AiOutlineClose className="fill-rose-500 mr-1" fontSize={20} />
            Advanced statistics of your offers and your companys profile views.
          </p>
          <p className="inline-flex">
            <AiOutlineClose className="fill-rose-500 mr-1" fontSize={20} />
            Import/Export offers to CSV, XLS, XML files.
          </p>
          <p className="inline-flex">
            <AiOutlineClose className="fill-rose-500 mr-1" fontSize={20} />
            The assistance of personal adviser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistationRightSiteInfo;
