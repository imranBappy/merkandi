"use client";

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";
import orderSlice from "../features/order/orderSlice";
import searchSlice from "../features/search/searchSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    order: orderSlice,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware().concat(apiSlice.middleware),
  ],
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware().concat(apiSlice.middleware), unauthenticatedMiddleware],
  // devTools: process.env.NODE_ENV !== 'production',
  devTools: true,
});

export default store;
