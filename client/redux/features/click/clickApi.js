import { apiSlice } from "../api/apiSlice";

const url = `/click`;
export const clickApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postClick: builder.mutation({
      query: (body) => ({
        url: url,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Click"],
    }),
    getClicks: builder.query({
      query: ({
        page = 1,
        limit = 10,
        type = "",
        isCustomare = "",
        wholesale=""
      } = {}) =>
        `${url}?page=${page}&limit=${limit}&type=${type}&isCustomare=${isCustomare}&wholesale=${wholesale}`,
      providesTags: ["Click"],
    }),
  }),
});

export const { usePostClickMutation, useGetClicksQuery } = clickApi;
