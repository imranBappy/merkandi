"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.NEXT_PUBLIC_HOST;
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: async (headers, { getState, endpoint }) => {
      let token = getState();
      token = token?.auth?.accessToken;
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "Product",
    "Categories",
    "Brand",
    "Subcategory",
    "Auth",
    "Image",
    "Country",
    "ProductGroup",
    "Testimonial",
    "Page",
    "Store",
    "Click",
    "Wholesaler",
    "Order",
    "Settings",
    "Coupon",
  ],
  endpoints: (builder) => ({}),
});
