"use client";

import Seller from "@/components/Seller";
import { useGetStoresQuery } from "@/redux/features/store/storeApi";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function WholesalesPagee() {
  const { data } = useGetStoresQuery({
    Default: true,
  });

  const { isAuthintication } = useSelector((state) => state.auth);

  return (
    <>
      {isAuthintication &&
        data?.stores?.map((store) => <Seller key={store._id} store={store} />)}
      <div className="z-0 bg-[url('/images/bg-unlock.jpg')] bg-no-repeat bg-cover h-[400px] pt-8 relative flex flex-col items-center">
        <div className="bg-black opacity-70 absolute inset-0 z-0"></div>
        <h1 className="relative text-center text-4xl leading-10 font-extrabold text-white max-w-[600px] z-10">
          Contact wholesalers from Europe and the rest of the world!
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
      <div className="max-w-screen-xl mx-auto md:px-8 -mt-28 z-10 relative">
        <div className="bg-white shadow-2xl p-6">
          <div className="flex flex-col md:flex-row mb-6">
            <div className="w-full md:w-2/4">
              <Image
                src="/images/boxes.jpg"
                width={538}
                height={343}
                alt="Picture of the author"
                className="mr-2"
              />
            </div>
            <div className="w-full md:w-2/4">
              <div className="gap-y-4 grid">
                <h1 className="text-2xl font-semibold">
                  Stock clothes WITT WEIDEN
                </h1>
                <p>
                  This is an overstock/store stock apparel lot. All items are
                  new overstock store stock and or shelf pulls. All sizes are
                  mixed and assorted. Items may have retail tags removed. Items
                  may have a black lined or cut label to prevent retail store
                  returns.
                </p>

                <p>
                  This is an overstock/store stock apparel lot. All items are
                  new overstock store stock and or shelf pulls. All sizes are
                  mixed and assorted. Items may have retail tags removed. Items
                  may have a black lined or cut label to prevent retail store
                  returns.
                </p>
                <p>
                  This is an overstock/store stock apparel lot. All items are
                  new overstock store stock and or shelf pulls. All sizes are
                  mixed and assorted. Items may have retail tags removed. Items
                  may have a black lined or cut label to prevent retail store
                  returns.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4 mb-4">
            <h1 className="text-lg font-semibold border-b mb-2 pb-2">
              Professional wholesalers catalogue
            </h1>
            <h1 className="text-lg font-semibold border-b mb-2 pb-2">
              Professional wholesalers catalogue
            </h1>
            <h1 className="text-lg font-semibold border-b mb-2 pb-2">
              Professional wholesalers catalogue
            </h1>
          </div>
          <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4 mb-4">
            <p className="text-sm border-b mb-2 pb-2 text-[#495057] leading-6">
              Manufacturers, suppliers, distributors, wholesalers and so on in
              one place. All of them presented in the intuitive way, so that you
              can contact them immediately
            </p>
            <p className="text-sm border-b mb-2 pb-2 text-[#495057] leading-6">
              Manufacturers, suppliers, distributors, wholesalers and so on in
              one place. All of them presented in the intuitive way, so that you
              can contact them immediately
            </p>
            <p className="text-sm border-b mb-2 pb-2 text-[#495057] leading-6">
              Manufacturers, suppliers, distributors, wholesalers and so on in
              one place. All of them presented in the intuitive way, so that you
              can contact them immediately
            </p>
          </div>
          <h1 className="text-lg font-semibold my-6 text-center">
            Verified wholesalers from 150 countrie
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="flex items-start">
              <div className="rounded-full  w-52 h-20 flex items-center justify-center border bg-[#fff3e7] mr-3">
                <svg
                  className="text-[#f29d00] p-2"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  height="80"
                  width="80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    fill="#E8EAF6"
                    points="42,39 6,39 6,23 24,6 42,23"
                  ></polygon>
                  <g fill="#C5CAE9">
                    <polygon points="39,21 34,16 34,9 39,9"></polygon>
                    <rect x="6" y="39" width="36" height="5"></rect>
                  </g>
                  <polygon
                    fill="#B71C1C"
                    points="24,4.3 4,22.9 6,25.1 24,8.4 42,25.1 44,22.9"
                  ></polygon>
                  <rect
                    x="18"
                    y="28"
                    fill="#D84315"
                    width="12"
                    height="16"
                  ></rect>
                  <rect
                    x="21"
                    y="17"
                    fill="#01579B"
                    width="6"
                    height="6"
                  ></rect>
                  <path
                    fill="#FF8A65"
                    d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="text-md font-semibold mb-2">
                  Only verified wholesalers
                </h1>
                <p className="text-sm text-[#495057] leading-6">
                  Manufacturers, suppliers, distributors, wholesalers and so on
                  in one place. All of them presented in the intuitive way, so
                  that you can contact them immediately
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="rounded-full w-52 h-20 flex items-center justify-center border bg-[#fff3e7] mr-3">
                <svg
                  className="text-[#f29d00] p-2"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  height="80"
                  width="80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    fill="#E8EAF6"
                    points="42,39 6,39 6,23 24,6 42,23"
                  ></polygon>
                  <g fill="#C5CAE9">
                    <polygon points="39,21 34,16 34,9 39,9"></polygon>
                    <rect x="6" y="39" width="36" height="5"></rect>
                  </g>
                  <polygon
                    fill="#B71C1C"
                    points="24,4.3 4,22.9 6,25.1 24,8.4 42,25.1 44,22.9"
                  ></polygon>
                  <rect
                    x="18"
                    y="28"
                    fill="#D84315"
                    width="12"
                    height="16"
                  ></rect>
                  <rect
                    x="21"
                    y="17"
                    fill="#01579B"
                    width="6"
                    height="6"
                  ></rect>
                  <path
                    fill="#FF8A65"
                    d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="text-md font-semibold mb-2">
                  Only verified wholesalers
                </h1>
                <p className="text-sm text-[#495057] leading-6">
                  Manufacturers, suppliers, distributors, wholesalers and so on
                  in one place. All of them presented in the intuitive way, so
                  that you can contact them immediately
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="rounded-full w-52 h-20 flex items-center justify-center border bg-[#fff3e7] mr-3">
                <svg
                  className="text-[#f29d00] p-2"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  height="80"
                  width="80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    fill="#E8EAF6"
                    points="42,39 6,39 6,23 24,6 42,23"
                  ></polygon>
                  <g fill="#C5CAE9">
                    <polygon points="39,21 34,16 34,9 39,9"></polygon>
                    <rect x="6" y="39" width="36" height="5"></rect>
                  </g>
                  <polygon
                    fill="#B71C1C"
                    points="24,4.3 4,22.9 6,25.1 24,8.4 42,25.1 44,22.9"
                  ></polygon>
                  <rect
                    x="18"
                    y="28"
                    fill="#D84315"
                    width="12"
                    height="16"
                  ></rect>
                  <rect
                    x="21"
                    y="17"
                    fill="#01579B"
                    width="6"
                    height="6"
                  ></rect>
                  <path
                    fill="#FF8A65"
                    d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="text-md font-semibold mb-2">
                  Only verified wholesalers
                </h1>
                <p className="text-sm text-[#495057] leading-6">
                  Manufacturers, suppliers, distributors, wholesalers and so on
                  in one place. All of them presented in the intuitive way, so
                  that you can contact them immediately
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-10 space-x-3">
        <div className="relative rounded-full bg-[#e4e4e4] w-12 h-12 flex items-center justify-center mt-4">
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
        <h1 className="text-2xl font-semibold text-center py-4">
          Start buying globally for the lowest prices!
        </h1>
        {!isAuthintication && (
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/dashboard"
              className="w-32 text-center border-[#207ba2] border bg-white text-[#207ba2] py-3 font-normal text-sm leading-3"
            >
              Log in
            </Link>
            <Link
              href="/offers"
              className="w-32 text-center border bg-[#207ba2] text-white py-3 font-normal text-sm leading-3"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
