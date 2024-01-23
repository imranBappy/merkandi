"use client";
import React, { useState } from "react";
import { BiLogOutCircle, BiSolidTachometer } from "react-icons/bi";
import AdminLink from "../AdminLink";
import useLogout from "@/hooks/useLogout";

function AdminBer() {
  const [showAdmin, setShowAdmin] = useState(false);
  const logout = useLogout();
  return (
    <>
      <button
        onClick={() => setShowAdmin(!showAdmin)}
        className="p-1 block md:hidden fixed top-2 left-10 z-50"
      >
        <svg
          className="text-rose-500"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div
        className={`md:w-full w-1/4 divide-y md:block md:border-r ${
          showAdmin
            ? "block fixed inset-0 bg-white z-50 w-60 overflow-scroll"
            : "hidden"
        }`}
      >
        <div className="w-full bg-[#1f8ebe] p-3">
          <div className="text-white md:text-center relative">
            <h1 className="text-xl font-semibold mb-1">Welcome to Admin</h1>
            <p className="text-sm font-normal text-white">
              Wholesale trading without limits
            </p>
            <button
              onClick={() => setShowAdmin(!showAdmin)}
              className="absolute right-0 top-0 md:hidden block"
            >
              <svg
                className="text-center inline text-white"
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
        </div>
        <AdminLink
          defaultTitle="Product"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[
            { title: "Product list", link: "/admin/product" },
            { title: "Product add", link: "/admin/product/add" },
            { title: "Category", link: "/admin/product/category" },
            { title: "Subcategory", link: "/admin/product/subcategory" },

            { title: "Pick Products", link: "/admin/product/pick" },
          ]}
        />

        <AdminLink
          defaultTitle="Coupon"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[{ title: "Coupon list", link: "/admin/coupon" }]}
        />
        <AdminLink
          defaultTitle="Page"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[{ title: "Page list", link: "/admin/page" }]}
        />
        <AdminLink
          defaultTitle="Specification"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[
            { title: "Attributes", link: "/admin/attributes" },
            { title: "Feature", link: "/admin/feature" },
            { title: "Brand", link: "/admin/brand" },
            { title: "Lavel", link: "/admin/lavel" },
            { title: "Unit", link: "/admin/unit" },
            { title: "Product Group", link: "/admin/product-group" },
            { title: "Country", link: "/admin/country" },
          ]}
        />
        <AdminLink
          defaultTitle="Offers"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[
            { title: "Offers list", link: "/admin/offers" },
            { title: "Offers add", link: "/admin/offers/add" },
          ]}
        />
        <AdminLink
          defaultTitle="Banner"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[
            { title: "Banner list", link: "/admin/banner" },
            { title: "Banner add", link: "/admin/banner/add" },
          ]}
        />
        <AdminLink
          defaultTitle="Orders"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[
            { title: "Orders list", link: "/admin/orders" },
            { title: "Pending Orders", link: "/admin/orders/pending" },
            { title: "Order Cancel Reason", link: "/admin/orders/reason" },
          ]}
        />
        <AdminLink
          defaultTitle="Testimonial"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[{ title: "Testimonial", link: "/admin/testimonial" }]}
        />
        <AdminLink
          defaultTitle="Service"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[
            { title: "Service list", link: "/admin/service" },
            { title: "Service request", link: "/admin/service/request" },
            { title: "Service cancel", link: "/admin/service/cancel" },
            { title: "Service report", link: "/admin/service/report" },
          ]}
        />
        <AdminLink
          defaultTitle="Seller"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[
            { title: "Seller list", link: "/admin/seller" },
            { title: "Seller request", link: "/admin/seller/request" },
            { title: "Seller product", link: "/admin/seller/product" },
            { title: "Seller report", link: "/admin/seller/report" },
            { title: "Seller pay request", link: "/admin/payment/request" },
          ]}
        />
        <AdminLink
          defaultTitle="Payment Settings"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[
            { title: "Purchase Gateway", link: "/admin/payment" },
            { title: "Seller Gateway", link: "/admin/payment/seller" },
          ]}
        />
        <AdminLink
          defaultTitle="Location"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[
            { title: "Country", link: "/admin/location" },
            { title: "State", link: "/admin/location/state" },
            { title: "City", link: "/admin/location/city" },
            { title: "Area", link: "/admin/location/area" },
          ]}
        />
        <AdminLink
          defaultTitle="User"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[
            { title: "Admin list", link: "/admin/user" },
            { title: "Staff list", link: "/admin/user/staff" },
            { title: "Standard user", link: "/admin/user/standard" },
            { title: "Premium user", link: "/admin/user/premium" },
          ]}
        />
        <AdminLink
          defaultTitle="SMTP & OTP Config"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[
            { title: "OTP list", link: "/admin/otp" },
            { title: "OTP add", link: "/admin/otp/add" },
            { title: "Email list", link: "/admin/email" },
            { title: "Email add", link: "/admin/email/add" },
          ]}
        />
        <AdminLink
          defaultTitle="My account"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[
            { title: "Account profile", link: "/admin/user/profile" },
            { title: "Change Password", link: "/admin/user/password" },
          ]}
        />
        <AdminLink
          defaultTitle="General Settings"
          defaultIcon={<BiSolidTachometer fontSize={25} />}
          items={[
            { title: "General Settings", link: "/admin/settings" },
            // { title: "Site settings", link: "/admin/settings/site" },
            // { title: "Header Setting", link: "/admin/settings/header" },
            // { title: "Footer Setting", link: "/admin/settings/footer" },
            // { title: "Logo Setting", link: "/admin/settings/logo" },
            // { title: "Body & Header", link: "/admin/settings/body" },
            // { title: "SEO Setting", link: "/admin/settings/seo" },
            { title: "Variables", link: "/admin/settings/variables" },

            // {
            //   title: "Social Media Login",
            //   link: "/admin/settings/social-login",
            // },
            // {
            //   title: "Social Media Link",
            //   link: "/admin/settings/social-link",
            // },
          ]}
        />
        <div className="bg-white border-b">
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

export default AdminBer;
