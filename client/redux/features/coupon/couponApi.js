import { apiSlice } from "../api/apiSlice";

const url = `/coupon`;
export const couponApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postCoupon: builder.mutation({
      query: (body) => ({
        url: url,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Coupon"],
    }),
    getCoupons: builder.query({
      query: ({ page = 1, limit = 10 } = {}) =>
        `${url}?page=${page}&limit=${limit}`,
      providesTags: ["Coupon"],
    }),
   
    updateCoupon: builder.mutation({
      query: ({ id, body }) => ({
        url: `${url}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Coupon"],
    }),
    deleteCoupon: builder.mutation({
      query: (id) => ({
        url: `${url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Coupon"],
    }),
  }),
});

export const {
  usePostCouponMutation,
  useGetCouponsQuery,
  useUpdateCouponMutation,
  useDeleteCouponMutation,
} = couponApi;
