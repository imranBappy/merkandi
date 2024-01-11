import { apiSlice } from "../api/apiSlice";

const url = `/wholesaler`;
export const wholesalerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postWholesaler: builder.mutation({
      query: (body) => ({
        url: url,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Wholesaler"],
    }),
    getWholesalers: builder.query({
      query: ({ page = 1, limit = 10, Default = "" } = {}) =>
        `${url}?page=${page}&limit=${limit}Default=${Default}`,
      providesTags: ["Wholesaler"],
    }),
    getWholesaler: builder.query({
      query: (id) => `${url}/${id}`,
      invalidatesTags: ["Wholesaler"],
    }),
    updateWholesaler: builder.mutation({
      query: ({ id, body }) => ({
        url: `${url}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Wholesaler"],
    }),
    deleteWholesaler: builder.mutation({
      query: (id) => ({
        url: `${url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Wholesaler"],
    }),
  }),
});

export const {
  usePostWholesalerMutation,
  useGetWholesalersQuery,
  useGetWholesalerQuery,
  useUpdateWholesalerMutation,
  useDeleteWholesalerMutation,
} = wholesalerApi;
