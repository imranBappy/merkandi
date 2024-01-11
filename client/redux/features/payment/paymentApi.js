import { apiSlice } from "../api/apiSlice";

const url = `/payment/stripe`;
export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createStripePayment: builder.mutation({
      query: (body) => ({
        url: `${url}/init`,
        method: "POST",
        body,
      }),
    }),
    verifyPayment: builder.mutation({
      query: (body) => ({
        url: `${url}/success`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateStripePaymentMutation, useVerifyPaymentMutation } =
  paymentApi;
