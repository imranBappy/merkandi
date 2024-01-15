"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileBottomMenu from "./Menu/MobileBottomMenu";
import { useGetSettingsQuery } from "@/redux/features/settings/settingsApi";

const Footer = () => {
  const { data, isLoading } = useGetSettingsQuery();

  return (
    <>
      <MobileBottomMenu />
      <div className="hidden md:block">
        <div className="bg-[#1c1c1c] text-[#969696]">
          <div className="max-w-screen-xl mx-auto py-4 md:px-8">
            <div className="flex flex-wrap py-10">
              <div className="w-1/3">
                <Image
                  src={data?.footerLogo?.url}
                  width={163}
                  height={72}
                  alt="Picture of the author"
                  className="mb-3 opacity-50"
                />
                <span className="text-sm leading-6 mt-3">
                  An international wholesale trading platform for overstocks,
                  clearance stocks, company liquidation stocks, bankrupt stocks
                  and customer returns.
                </span>
              </div>
              <div className="w-2/12 flex flex-col space-y-2">
                <h6 className="text-white">Community</h6>
                <Link href="/" className="hover:text-white leading-6">
                  Stock grades
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  What do I need to do to access the wholesalers data?
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  Blog
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  History of Merkandi
                </Link>
              </div>
              <div className="w-2/12 flex flex-col space-y-2">
                <h6 className="text-white">Information</h6>
                <Link href="/" className="hover:text-white leading-6">
                  Terms and Conditions
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  Privacy Policy
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  Cookie files policy
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  About us
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  Advertisement
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  Goods search service
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  Work at Merkandi
                </Link>
              </div>
              <div className="w-2/12 flex flex-col space-y-2">
                <h6 className="text-white">Help</h6>
                <Link href="/" className="hover:text-white leading-6">
                  FAQ
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  Contact
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  Sitemap
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  For buyers
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  For sellers
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  Guidelines
                </Link>
              </div>
              <div className="w-2/12 flex flex-col space-y-2">
                <h6 className="text-white">Social Media</h6>
                <Link href="/" className="hover:text-white leading-6">
                  Facebook
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  LinkedIn
                </Link>
                <Link href="/" className="hover:text-white leading-6">
                  YouTube
                </Link>
              </div>
            </div>

            <Image
              src="/images/payment_methods.png"
              width={1100}
              height={62}
              alt="Picture of the author"
              className="m-auto border-b border-[#414141] pb-3 mb-3"
            />
            <span className="flex justify-center text-center text-xs px-10 leading-6 mt-3 w-full">
              © Copyright (c) 2008 - 2023 Merkandi All rights reserved. All
              trademarks and brands used on this site belong to the owner of the
              website and are used for information purpose.
              <br />
              The use of this website constitutes acceptance of the terms of the
              contract, and the general terms and conditions. Merkandi assumes
              no responsibility for the content of the offers placed on this
              website.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
