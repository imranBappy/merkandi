import { apiSlice } from "../api/apiSlice";

const url = `/page`;
export const pageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postPage: builder.mutation({
      query: (body) => ({
        url: url,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Page"],
    }),
    getPages: builder.query({
      query: ({ page = 1, limit = 10 } = {}) => {
        console.log({
          url: `${url}?page=${page}&limit=${limit}`,
        });
        return `${url}?page=${page}&limit=${limit}`;
      },
      providesTags: ["Page"],
    }),
    getPage: builder.query({
      query: (slug) => `${url}/${slug}`,
      invalidatesTags: [{ type: "Page", id: "LIST" }],
    }),
    updatePage: builder.mutation({
      query: ({ slug, body }) => ({
        url: `${url}/${slug}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Page"],
    }),
    deletePage: builder.mutation({
      query: (slug) => ({
        url: `${url}/${slug}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Page"],
    }),
  }),
});

export const {
  usePostPageMutation,
  useGetPagesQuery,
  useGetPageQuery,
  useUpdatePageMutation,
  useDeletePageMutation,
} = pageApi;
