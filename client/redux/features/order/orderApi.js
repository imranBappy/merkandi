import { apiSlice } from "../api/apiSlice";

const url = `/order`;
export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    orderAdd: builder.mutation({
      query: (body) => ({
        url: url,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Order"],
    }),
    getOrders: builder.query({
      query: ({ page = 1, limit = 10, userType = "user" } = {}) =>
        `${url}?page=${page}&limit=${limit}&userType=${userType}`,
      providesTags: ["Order"],
    }),
    getOrder: builder.query({
      query: (id) => `${url}/${id}`,
      providesTags: ["Order"],
    }),
    updateOrder: builder.mutation({
      query: ({ id, body }) => ({
        url: `${url}/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useOrderAddMutation,
  useGetOrdersQuery,
  useGetOrderQuery,
  useUpdateOrderMutation,
} = orderApi;
