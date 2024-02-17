import { apiSlice } from "../api/apiSlice";

const url = `/category`;
export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postCategory: builder.mutation({
      query: (body) => ({
        url: url,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Categories"],
    }),
    getCategories: builder.query({
      query: ({ page = 1, limit = 10 } = { page: 1, limit: 10 }) =>
        `${url}?page=${page}&limit=${limit}`,
      providesTags: ["Categories"],
    }),
    getCategory: builder.query({
      query: (id) => `${url}/${id}`,
      providesTags: (result, error, id) => {
        return [{ type: "Categories", id: id }];
      },
    }),
    updateCategory: builder.mutation({
      query: ({ id, body }) => ({
        url: `${url}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  usePostCategoryMutation,
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} = categoryApi;
