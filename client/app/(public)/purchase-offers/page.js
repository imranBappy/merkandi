"use client";
import Purchase from "@/components/Purchase";

export default function Purchases() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto md:px-8 my-6">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4"></div>
          <div className="w-full md:w-3/4">
            <div className="flex items-center bg-[#d1ecf1] text-[#0c5460] p-4 mb-4 mx-2 md:mx-0">
              <svg
                className="mr-2 rotate-180"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="70"
                width="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 008 8h0a8 8 0 008-8l8-216c.58-8.64-7.34-16-16-16z"
                ></path>
                <circle
                  cx="256"
                  cy="416"
                  r="16"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                ></circle>
              </svg>
              <p>
                Add a purchase offer informing what you are currently looking
                for and what goods you are interested in, and then just wait for
                quotes from wholesalers and manufacturers.
                <br />
                Save your time and money by publishing a purchase offer on the
                merchandise you need.
              </p>
            </div>

            <div className="space-y-4">
              <Purchase
                link="/"
                title="Greek pistachios with shells"
                subtitle="Greek pistachios with shells، I want big quantities. to resell in Turkey.                                "
                delivery="Turkey"
                quantity="10000 kilogram"
                grade="New"
                person="No"
                times="1 day ago"
                price="12.00"
                kilogram="kg"
                images={["/images/1.webp"]}
                offer="NO OFFERS"
              />
              <Purchase
                link="/"
                title="Greek pistachios with shells"
                subtitle="Greek pistachios with shells، I want big quantities. to resell in Turkey.                                "
                delivery="Turkey"
                quantity="10000 kilogram"
                grade="New"
                person="No"
                times="1 day ago"
                price="12.00"
                kilogram="kg"
                images=""
                offer="NO OFFERS"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
