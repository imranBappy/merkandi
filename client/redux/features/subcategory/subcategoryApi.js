import { apiSlice } from "../api/apiSlice";

const url = `/subcategory`;
export const SubcategoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postSubcategory: builder.mutation({
      query: (body) => ({
        url: url,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Subcategory"],
    }),
    getSubcategories: builder.query({
      query: ({ page = 1, limit = 10 } = { page: 1, limit: 10 }) =>
        `${url}?page=${page}&limit=${limit}`,
      providesTags: ["Subcategory"],
    }),
    getSubcategory: builder.query({
      query: (id) => `${url}/${id}`,
      providesTags: (result, error, id) => {
        return [{ type: "Subcategory", id: id }];
      },
    }),
    updateSubcategory: builder.mutation({
      query: (body) => ({
        url: `${url}/${body._id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) => ["Subcategory"],
    }),
  }),
});

export const {
  usePostSubcategoryMutation,
  useGetSubcategoriesQuery,
  useGetSubcategoryQuery,
  useUpdateSubcategoryMutation,
} = SubcategoryApi;
