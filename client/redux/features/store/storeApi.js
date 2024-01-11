import { apiSlice } from "../api/apiSlice";

const url = `/store`;
export const storeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postStore: builder.mutation({
      query: (body) => ({
        url: url,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Store"],
    }),
    getStores: builder.query({
      query: ({
        page = 1,
        limit = 10,
        user = "",
        active = "",
        Default = "",
        type = "",
      } = {}) =>
        `${url}?page=${page}&limit=${limit}&user=${user}&active=${active}&Default=${Default}&type=${type}`,
      providesTags: ["Store"],
    }),
    getStore: builder.query({
      query: (id) => `${url}/${id}`,
      invalidatesTags: ["Store"],
    }),
    updateStore: builder.mutation({
      query: ({ id, body }) => ({
        url: `${url}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Store"],
    }),
    deleteStore: builder.mutation({
      query: (id) => ({
        url: `${url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Store"],
    }),
  }),
});

export const {
  usePostStoreMutation,
  useGetStoresQuery,
  useGetStoreQuery,
  useUpdateStoreMutation,
  useDeleteStoreMutation,
} = storeApi;
