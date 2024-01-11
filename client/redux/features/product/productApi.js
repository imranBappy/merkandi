import { apiSlice } from "../api/apiSlice";

const url = `/product`;
export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postProduct: builder.mutation({
      query: (body) => ({
        url: url,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    getProducts: builder.query({
      query: ({
        page = 1,
        category = "",
        brand = "",
        subcategory = "",
        productGroup = "",
        term = "",
        user = "",
      } = {}) =>
        `${url}?page=${page}&category=${category}&brand=${brand}&subcategory=${subcategory}&productGroup=${productGroup}&term=${term}&user=${user}`,
      providesTags: ["Product"],
    }),

    getShop: builder.mutation({
      query: ({
        page = 1,
        category = "",
        brand = "",
        subcategory = "",
        productGroup = "",
        term = "",
        body = {},
      } = {}) => ({
        url: `${url}/shop?page=${page}&category=${category}&brand=${brand}&subcategory=${subcategory}&productGroup=${productGroup}&term=${term}`,
        method: "POST",
        body,
      }),

      providesTags: ["Product"],
    }),
    getProduct: builder.query({
      query: (id) => `${url}/${id}`,
      providesTags: (result, error, id) => {
        return [{ type: "Product", id: id }];
      },
    }),
    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `${url}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  usePostProductMutation,
  useGetProductsQuery,
  useGetShopMutation,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
