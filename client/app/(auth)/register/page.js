"use client";
import PublicRoute from "@/components/PublicRoute/PublicRoute";
import Questions from "@/components/Questions";
import Register1 from "@/components/Register1";
import Register2 from "@/components/Register2";

export default function Register() {
  return (
    <PublicRoute>
      <div className="z-0 bg-[url('/images/bg-pricing.jpg')] bg-no-repeat bg-cover h-[400px] pt-8 relative flex flex-col items-center">
        <div className="bg-black opacity-70 absolute inset-0 z-0"></div>
        <h1 className="relative text-center text-3xl leading-10 font-bold text-white z-10">
          Increase your sales, buy cheap on Lot24
        </h1>
        <h1 className="relative text-center text-xl leading-10 font-extralight pt-3 text-[#bebebe] z-10">
          Wholesale goods from excess stock, end of series and clearance sales
          from 150 countries!
        </h1>
        <div className="relative rounded-full bg-white w-12 h-12 flex items-center justify-center mt-4">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Lock">
              <g>
                <path d="M17.44,9.33h-1.1V6.4a4.34,4.34,0,0,0-8.68,0V9.33H6.56a2.5,2.5,0,0,0-2.5,2.5v7.61a2.507,2.507,0,0,0,2.5,2.5H17.44a2.507,2.507,0,0,0,2.5-2.5V11.83A2.5,2.5,0,0,0,17.44,9.33ZM8.66,6.4a3.34,3.34,0,0,1,6.68,0V9.33H8.66ZM18.94,19.44a1.511,1.511,0,0,1-1.5,1.5H6.56a1.511,1.511,0,0,1-1.5-1.5V11.83a1.5,1.5,0,0,1,1.5-1.5H17.44a1.5,1.5,0,0,1,1.5,1.5Z"></path>
                <path d="M13,14.95a.984.984,0,0,1-.5.86v1.5a.5.5,0,0,1-1,0v-1.5a.984.984,0,0,1-.5-.86,1,1,0,0,1,2,0Z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="md:block hidden">
        <Register1 />
      </div>
      <div className="md:block hidden py-8 bg-white mt-8">
        <div className="max-w-4xl m-auto">
          <h1 className="text-3xl font-bold text-center mb-4">
            Frequently asked questions
          </h1>
          <Questions
            items={[
              {
                title: "Can I register on Lot24 without a company?",
                content:
                  "Yes, private individuals can also create an account on Lot24. However, please note that a small part of our wholesalers sell goods only to companies. Moreover, in order to sell on Lot24 you must have an active business.",
              },
              {
                title: "How can I make a purchase on Lot24?",
                content:
                  "To buy on Lot24, you need to create an account and pay a registration fee. After payment, your account will be activated and you will get access to the contact details of the sellers.",
              },
              {
                title: "Where is the warehouse located?",
                content:
                  "To buy on Lot24, you need to create an account and pay a registration fee. After payment, your account will be activated and you will get access to the contact details of the sellers.",
              },
              {
                title: "Where is the warehouse located?",
                content:
                  "To buy on Lot24, you need to create an account and pay a registration fee. After payment, your account will be activated and you will get access to the contact details of the sellers.",
              },
            ]}
          />
        </div>
      </div>
      <div className="block md:hidden">
        <Register2 />
      </div>
    </PublicRoute>
  );
}
