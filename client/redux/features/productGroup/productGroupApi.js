import { apiSlice } from "../api/apiSlice";

const url = `/product-group`;
export const productGroupApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postProductGroup: builder.mutation({
      query: (body) => ({
        url: url,
        method: "POST",
        body,
      }),
      invalidatesTags: ["ProductGroup"],
    }),
    getProductsGroup: builder.query({
      query: () => url,
      providesTags: ["ProductGroup"],
    }),
    getProductGroup: builder.query({
      query: (id) => `${url}/${id}`,
      invalidatesTags: ["ProductGroup"],
    }),
    updateProductGroup: builder.mutation({
      query: ({ id, body }) => ({
        url: `${url}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["ProductGroup"],
    }),
  }),
});

export const {
  usePostProductGroupMutation,
  useGetProductsGroupQuery,
  useGetProductGroupQuery,
  useUpdateProductGroupMutation,
} = productGroupApi;
