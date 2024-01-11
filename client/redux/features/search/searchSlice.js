"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  result: [],
  isLoading: false,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addResult(state, action) {
      state.result = action.payload.result;
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const { addResult } = searchSlice.actions;
export default searchSlice.reducer;
