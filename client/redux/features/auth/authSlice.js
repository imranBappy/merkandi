"use client";

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  accessToken: undefined,
  data: undefined,
  isAuthintication: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn(state, action) {
      state.accessToken = action.payload.accessToken;
      state.data = action.payload.data;
      state.isAuthintication = action.payload.isAuthintication;
    },
    userLoggedOut(state) {
      state.accessToken = undefined;
      state.data = undefined;
      state.isAuthintication = false;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
