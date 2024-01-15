"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import useLogout from "@/hooks/useLogout";
import NevBer from "../NevBer";
import useAuthCheck from "@/hooks/useAuthCheck";
import { useGetSettingsQuery } from "@/redux/features/settings/settingsApi";

const BasicHeader = () => {
  const [showNev2, setShowNev2] = useState(false);
  const { data } = useGetSettingsQuery();

  useAuthCheck();
  const auth = useSelector((state) => state.auth);
  const logout = useLogout();

  return (
    <>
      <div>
        <div className="bg-white">
          <div className="flex wrap items-center justify-between max-w-screen-xl mx-auto py-4 md:px-8">
            <div className="w-1/4">
              <Link href="/">
                <Image
                  src={data?.logo?.url}
                  width={163}
                  height={72}
                  alt="Picture of the author"
                  className="mr-2"
                />
              </Link>
            </div>

            <div className="w-1/3 flex items-center justify-end">
              <div className="flex items-center mr-4">
                <div className="rounded-full border border-gray-300 w-12 h-12 flex items-center justify-center mr-4">
                  <svg
                    className="text-m"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 256 256"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p>{`Hello ${auth?.data?.name || ""}`}</p>
                  <div className="flex items-center gap-2">
                    {auth.isAuthintication ? (
                      <Link href="/dashboard" className="text-m">
                        My Account
                      </Link>
                    ) : (
                      <Link href="/login" className="text-m">
                        Login
                      </Link>
                    )}
                    <p>|</p>
                    {auth.isAuthintication ? (
                      <button onClick={logout} className="text-red-500">
                        Log Out
                      </button>
                    ) : (
                      <Link href="/register" className="text-red-500">
                        create a new account
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <Link href="/wishlist" className="flex items-center relative">
                {" "}
                <div className="rounded-full border border-gray-300 w-12 h-12 flex items-center justify-center mr-4">
                  <svg
                    className="transform -scale-x-100 text-m"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <span className="p-2 bg-red-500 absolute right-0 top-0 leading-[6px] text-white">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between bg-white p-2 z-10">
          <div>
            <NevBer />
          </div>
          <div>
            <Link href="/">
              <Image
                src={data?.logo?.url}
                width={136}
                height={40}
                alt="Picture of the author"
                className="mr-2"
              />
            </Link>
          </div>
          <div>
            <button onClick={() => setShowNev2(!showNev2)} className="p-1">
              <svg
                className="text-black"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              </svg>
            </button>
            {showNev2 && (
              <div className="top-0 absolute bg-white p-2 w-full left-0 flex">
                {/* <Search /> */}
                <button onClick={() => setShowNev2(!showNev2)} className="px-2">
                  <svg
                    className="text-center inline text-black"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="30"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-[57px] md:hidden block"></div>
    </>
  );
};

export default BasicHeader;
