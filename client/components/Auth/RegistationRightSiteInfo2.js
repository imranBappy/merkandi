import React from "react";
import { BiCheck } from "react-icons/bi";

const RegistationRightSiteInfo2 = () => {
  return (
    <div className="w-full md:w-1/3">
      <div className={`w-full md:block md:border-r showStandard`}>
        <div className="border bg-white p-4 space-y-1">
          <h6 className="text-y font-semibold uppercase">PREMIUM</h6>
          <del className="text-[#969696] text-md notranslate text-line-through">
            EUR 279.00
            <small className="text-muted font-normal">+VAT</small>
          </del>
          <span className="bg-rose-500 text-white">-20%</span>
          <br />
          <span className="text-2xl font-semibold uppercase">
            EUR 223.20
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
            <BiCheck className="fill-green-500" fontSize={30} />
            Access to the opinions about the wholesalers.
          </p>
          <p className="inline-flex">
            <BiCheck className="fill-green-500" fontSize={30} />
            Access to the blacklist of wholesalers.
          </p>
          <p className="inline-flex">
            <BiCheck className="fill-green-500" fontSize={30} />
            Listing unlimited number of offers- after a positive verification of
            your company
          </p>
          <p className="inline-flex">
            <BiCheck className="fill-green-500" fontSize={30} />
            Promoting your offers all across Europe.
          </p>
          <p className="inline-flex">
            <BiCheck className="fill-green-500" fontSize={30} />
            Listing your company in Lot24 international catalogue.
          </p>
          <p className="inline-flex">
            <BiCheck className="fill-green-500" fontSize={30} />
            Creation of a multilingual profile of your company
          </p>
          <p className="inline-flex">
            <BiCheck className="fill-green-500" fontSize={30} />
            Advanced statistics of your offers and your companys profile views.
          </p>
          <p className="inline-flex">
            <BiCheck className="fill-green-500" fontSize={30} />
            Import/Export offers to CSV, XLS, XML files.
          </p>
          <p className="inline-flex">
            <BiCheck className="fill-green-500" fontSize={30} />
            The assistance of personal adviser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistationRightSiteInfo2;
