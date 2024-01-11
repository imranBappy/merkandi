"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Map from "@/components/Map";
import Profile from "@/components/Profile";
import Tabs from "@/components/Tabs";
import { useGetWholesalerQuery } from "@/redux/features/wholesaler/wholesalerApi";
import Link from "next/link";
import { BiStar } from "react-icons/bi";

export default function Home({ params }) {
  const { data } = useGetWholesalerQuery(params.id, {
    skip: !params.id,
  });

  const {
    company,
    phone,
    country,
    about,
    location,
    street,
    postalCode,
    vatId,
  } = data?.store[0] || {};

  console.log(data);
  return (
    <>
      <div className="z-0 bg-[url('/bg-seller.jpg')] bg-no-repeat bg-cover h-[120px] relative flex flex-col">
        <div className="bg-black opacity-70 absolute inset-0 z-0"></div>
        <Breadcrumb
          paths={[
            { label: "Home", link: "/" },
            { label: "Category", link: "/category" },
            { label: "Current Page", link: null },
          ]}
        />
      </div>
      <div className="max-w-screen-xl mx-auto my-1 md:px-8">
        <div className="flex flex-col md:flex-row items-start my-4 p-2 bg-white">
          <div className="w-full md:w-3/12">
            <Profile />
          </div>
          <div className="w-full md:w-9/12 pl-0 md:pl-6">
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <div>
                <div className="flex items-center ">
                  <h3 className="text-black text-2xl font-bold md:mr-2">
                    {company}
                  </h3>
                  <div className="flex items-center text-green-600 text-sm">
                    <svg
                      className="mr-1"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.03 9.78a.75.75 0 0 0-1.06-1.06l-5.47 5.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6-6Z"></path>
                      <path d="m14.136 1.2 1.375 1.01c.274.201.593.333.929.384l1.687.259a3.61 3.61 0 0 1 3.02 3.021l.259 1.686c.051.336.183.655.384.929l1.01 1.375a3.61 3.61 0 0 1 0 4.272l-1.01 1.375a2.106 2.106 0 0 0-.384.929l-.259 1.687a3.61 3.61 0 0 1-3.021 3.02l-1.686.259a2.106 2.106 0 0 0-.929.384l-1.375 1.01a3.61 3.61 0 0 1-4.272 0l-1.375-1.01a2.106 2.106 0 0 0-.929-.384l-1.687-.259a3.61 3.61 0 0 1-3.02-3.021l-.259-1.686a2.117 2.117 0 0 0-.384-.929L1.2 14.136a3.61 3.61 0 0 1 0-4.272l1.01-1.375c.201-.274.333-.593.384-.929l.259-1.687a3.61 3.61 0 0 1 3.021-3.02l1.686-.259c.336-.051.655-.183.929-.384L9.864 1.2a3.61 3.61 0 0 1 4.272 0Zm-3.384 1.209-1.375 1.01a3.614 3.614 0 0 1-1.59.658l-1.686.258a2.111 2.111 0 0 0-1.766 1.766l-.258 1.686a3.61 3.61 0 0 1-.658 1.589l-1.01 1.376a2.11 2.11 0 0 0 0 2.496l1.01 1.375c.344.469.57 1.015.658 1.59l.258 1.686c.14.911.855 1.626 1.766 1.766l1.686.258a3.61 3.61 0 0 1 1.589.658l1.376 1.01a2.11 2.11 0 0 0 2.496 0l1.375-1.01a3.613 3.613 0 0 1 1.59-.657l1.686-.26a2.11 2.11 0 0 0 1.766-1.765l.258-1.686a3.61 3.61 0 0 1 .658-1.589l1.01-1.376a2.11 2.11 0 0 0 0-2.496l-1.01-1.375a3.613 3.613 0 0 1-.657-1.59l-.26-1.686a2.11 2.11 0 0 0-1.765-1.766l-1.686-.258a3.61 3.61 0 0 1-1.589-.658l-1.376-1.01a2.11 2.11 0 0 0-2.496 0Z"></path>
                    </svg>
                    <b>Verified Seller</b>
                  </div>
                </div>
                <p className="text-sm font-normal">
                  Type of business: Wholesale
                </p>
              </div>
              {/* <Link
                className="border hover:border-black p-2 flex items-center gap-2"
                href="/"
              >
                <BiStar />
                <p>Follow</p>
              </Link> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <div className="block space-y-3 mb-4 pb-4 border-b">
                  <div className="grid grid-cols-2 w-full">
                    <b>Country:</b>
                    <p>{company}</p>
                  </div>
                  <div className="grid grid-cols-2 w-full">
                    <b>Address:</b>
                    <p>{location}</p>
                  </div>
                  <div className="grid grid-cols-2 w-full">
                    <b>Postal code:</b>
                    <p>{postalCode}</p>
                  </div>
                  <div className="grid grid-cols-2 w-full">
                    <b>VAT ID number:</b>
                    <p>VAT ID: {vatId}</p>
                  </div>
                  {/* <div className="grid grid-cols-2 w-full">
                    <b>Website:</b>
                    <Link href="https://b2b.4kom.pl" target="_blank">
                      https://b2b.4kom.pl
                    </Link>
                  </div> */}
                </div>
                <Tabs
                  tabs={[
                    { tab: "Mo.", content: "Opening hours: 08:30 - 15:00" },
                    { tab: "Tue.", content: "Opening hours: 08:30 - 15:00" },
                    { tab: "Wed.", content: "Opening hours: 08:30 - 15:00" },
                    { tab: "Do.", content: "Opening hours: 08:30 - 15:00" },
                    { tab: "Ms.", content: "Opening hours: 08:30 - 12:00" },
                    { tab: "Sat.", content: "Opening hours: closed" },
                    { tab: "So.", content: "Opening hours: closed" },
                  ]}
                />
              </div>
              <Map loc="Maschweg 6, 29227 Celle, Deutschland Germany" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
