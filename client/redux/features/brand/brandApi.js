import { apiSlice } from "../api/apiSlice";

const url = `/brand`;
export const brandApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postBrand: builder.mutation({
      query: (body) => ({
        url: url,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Brand"],
    }),
    getBrands: builder.query({
      query: () => url,
      providesTags: ["Brand"],
    }),
    getBrand: builder.query({
      query: (id) => `${url}/${id}`,
      invalidatesTags: ["Brand"],
    }),
    updateBrand: builder.mutation({
      query: ({ id, body }) => ({
        url: `${url}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Brand"],
    }),
  }),
});

export const {
  usePostBrandMutation,
  useGetBrandsQuery,
  useGetBrandQuery,
  useUpdateBrandMutation,
} = brandApi;
