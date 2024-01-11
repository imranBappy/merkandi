"use client";
import Link from "next/link";
import { useState } from "react";
import { LiaTachometerAltSolid } from "react-icons/lia";
import { BiLogOutCircle } from "react-icons/bi";
import useLogout from "@/hooks/useLogout";

function LeftUser() {
  const [showUsers, setShowUsers] = useState(false);
  const logout = useLogout();

  return (
    <>
      <button
        onClick={() => setShowUsers(!showUsers)}
        className="py-1 px-4 bg-y text-white font-semibold rounded-md mr-2 block md:hidden"
      >
        User
      </button>
      <div
        className={`md:w-full w-1/4 md:block md:border-r ${
          showUsers
            ? "block fixed inset-0 bg-white z-50 w-60 overflow-scroll"
            : "hidden"
        }`}
      >
        <div className="md:hidden block">
          <div className="flex items-center justify-between p-2 border-b w-full">
            <h1 className="text-m font-semibold">Seller data</h1>
            <button onClick={() => setShowUsers(!showUsers)}>
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
            <div
              className={`md:w-full w-1/4 md:block md:border-r ${
                showUsers
                  ? "block fixed inset-0 bg-white z-50 w-60 overflow-scroll"
                  : "hidden"
              }`}
            >
              <div className="md:hidden block">
                <div className="flex items-center justify-between p-2 border-b w-full">
                  <h1 className="text-m font-semibold">Seller data</h1>
                  <button onClick={() => setShowUsers(!showUsers)}>
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
                </div>
              </div>
              <div className="w-full bg-gray-200 p-4 mb-4">
                <div className="flex items-center mr-4">
                  <div className="rounded-full border-4 bg-m border-white w-16 h-16 flex items-center justify-center mr-4">
                    <svg
                      className="text-white"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 256 256"
                      height="35"
                      width="35"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <b className="text-xl">Abdul Karim</b>
                    <p className="text-sm bg-gray-500 px-2 text-white uppercase text-center">
                      Default
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center border-t border-white pt-3 mt-3">
                  <p>Account expiration date</p>
                  <b>October 19, 2024</b>
                  <Link
                    href="#"
                    className="border border-gray-400 p-2 text-center mt-3 rounded hover:bg-mm hover:text-white"
                  >
                    Extend the validity of the account
                  </Link>
                </div>
              </div>

              <div className="bg-white border text-black mb-4 flex flex-col">
                <b className="text-sm p-2 border-b uppercase">menu</b>

                <Link
                  href="/dashboard"
                  className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/messenger"
                  className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Messages
                </Link>
                <Link
                  href="/dashboard/order-products"
                  className="text-slate-500 p-2 hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Assignments
                </Link>
              </div>

              <div className="bg-white border text-black mb-4 flex flex-col">
                <b className="text-sm p-2 border-b uppercase">Service</b>

                <Link
                  href="/dashboard/service"
                  className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Service
                </Link>
                <Link
                  href="/dashboard/service"
                  className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  My service
                </Link>
                <Link
                  href="/dashboard/service/add"
                  className="text-slate-500 p-2 hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Service add
                </Link>
              </div>

              <div className="bg-white border text-black mb-4 flex flex-col">
                <b className="text-sm p-2 border-b uppercase">SHOPPING</b>

                <Link
                  href="/dashboard/favorites/products"
                  className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Products
                </Link>
                <Link
                  href="/dashboard/favorites/wholesale"
                  className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  wholesaler
                </Link>
                <Link
                  href="/dashboard/favorites/watched"
                  className="text-slate-500 p-2 hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Search results
                </Link>
              </div>

              <div className="bg-white border text-black mb-4 flex flex-col">
                <b className="text-sm p-2 border-b uppercase">SELLER</b>

                <Link
                  href="/dashboard/seller"
                  className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Products
                </Link>
                <Link
                  href="/dashboard/seller/add"
                  className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Products add
                </Link>
                <Link
                  href="/dashboard/seller/phone"
                  className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Phone
                </Link>
                <Link
                  href="/dashboard/seller/whatsapp"
                  className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Whatsapp
                </Link>
                <Link
                  href="/dashboard/seller/offer"
                  className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Offer
                </Link>
                <Link
                  href="/dashboard/seller/orders"
                  className="text-slate-500 p-2 hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Order
                </Link>
                <Link
                  href="/dashboard/seller/address"
                  className="text-slate-500 p-2 hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Address
                </Link>
              </div>

              <div className="bg-white border text-black mb-4 flex flex-col">
                <b className="text-sm p-2 border-b uppercase">
                  ACCOUNT MANAGEMENT
                </b>

                <Link
                  href="/dashboard/user"
                  className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  My data
                </Link>
                <Link
                  href="/dashboard/notifications"
                  className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Notifications
                </Link>
                <Link
                  href="/dashboard/orders"
                  className="text-slate-500 p-2 hover:bg-gray-200 flex items-center gap-2"
                >
                  <LiaTachometerAltSolid fontSize={25} />
                  Orders and invoices
                </Link>
              </div>
              <div className="bg-white border">
                <Link
                  href="/log-out"
                  className="text-rose-500 p-2 hover:bg-gray-200 flex items-center gap-2"
                >
                  <BiLogOutCircle fontSize={25} className="rotate-90" />
                  Log out
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <b className="text-xl">Abdul Karim</b>
              <p className="text-sm bg-gray-500 px-2 text-white uppercase text-center">
                Default
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center border-t border-white pt-3 mt-3">
            <p>Account expiration date</p>
            <b>October 19, 2024</b>
            <Link
              href="#"
              className="border border-gray-400 p-2 text-center mt-3 rounded hover:bg-mm hover:text-white"
            >
              Extend the validity of the account
            </Link>
          </div>
        </div>

        <div className="bg-white border text-black mb-4 flex flex-col">
          <b className="text-sm p-2 border-b uppercase">menu</b>

          <Link
            href="/dashboard"
            className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Dashboard
          </Link>
          <Link
            href="/dashboard/messenger"
            className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Messages
          </Link>
          <Link
            href="/dashboard/order-products"
            className="text-slate-500 p-2 hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Assignments
          </Link>
        </div>

        {/* <div className="bg-white border text-black mb-4 flex flex-col">
          <b className="text-sm p-2 border-b uppercase">Service</b>

          <Link
            href="/dashboard/service"
            className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Service
          </Link>
          <Link
            href="/dashboard/service/add"
            className="text-slate-500 p-2 hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Service add
          </Link>
        </div> */}

        <div className="bg-white border text-black mb-4 flex flex-col">
          <b className="text-sm p-2 border-b uppercase">SHOPPING</b>

          <Link
            href="/dashboard/shopping/myOrder"
            className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            My order
          </Link>

          <Link
            href="/dashboard/shopping/receiveOrder"
            className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Receive Order
          </Link>
          <Link
            href="/dashboard/shopping/click/product"
            className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Products
          </Link>
          <Link
            href="/dashboard/shopping/click/wholesale"
            className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            wholesaler
          </Link>
          <Link
            href="/dashboard/shopping/click/search"
            className="text-slate-500 p-2 hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Search results
          </Link>
        </div>

        <div className="bg-white border text-black mb-4 flex flex-col">
          <b className="text-sm p-2 border-b uppercase">SELLER</b>
          <Link
            href="/dashboard/seller/store"
            className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Store
          </Link>
          <Link
            href="/dashboard/seller"
            className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Products
          </Link>
          <Link
            href="/dashboard/seller/add"
            className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Products add
          </Link>
          <Link
            href="/dashboard/seller/click/phone"
            className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Phone
          </Link>
          <Link
            href="/dashboard/seller/click/message"
            className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Whatsapp
          </Link>
          <Link
            href="/dashboard/seller/offer"
            className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Offer
          </Link>
          <Link
            href="/dashboard/seller/click/order"
            className="text-slate-500 p-2 hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Order
          </Link>
        </div>

        <div className="bg-white border text-black mb-4 flex flex-col">
          <b className="text-sm p-2 border-b uppercase">ACCOUNT MANAGEMENT</b>

          <Link
            href="/dashboard/user"
            className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            My data
          </Link>
          <Link
            href="/dashboard/notifications"
            className="text-slate-500 p-2 border-b hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Notifications
          </Link>
          <Link
            href="/dashboard/orders"
            className="text-slate-500 p-2 hover:bg-gray-200 flex items-center gap-2"
          >
            <LiaTachometerAltSolid fontSize={25} />
            Orders and invoices
          </Link>
        </div>
        <div className="bg-white border">
          <button
            onClick={() => logout()}
            className="text-rose-500 p-2 w-full hover:bg-gray-200 flex items-center gap-2"
          >
            <BiLogOutCircle fontSize={25} className="rotate-90" />
            Log out
          </button>
        </div>
      </div>
    </>
  );
}

export default LeftUser;
