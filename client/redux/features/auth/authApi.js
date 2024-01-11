import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

const URL = "/auth";
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "/auth/signup",
        method: "POST",
        body,
      }),
    }),
    signin: builder.mutation({
      query: (body) => ({
        url: "/auth/signin",
        method: "POST",
        body,
      }),
      async onQueryStarted(body, { dispatch, queryFulfilled, requestId }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem("auth", JSON.stringify(result.data));
          dispatch(userLoggedIn(result.data));
        } catch (error) {
          console.log({ error });
        }
      },
    }),
    update: builder.mutation({
      query: (body) => ({
        url: "/auth/update",
        method: "PUT",
        body,
      }),
      async onQueryStarted(body, { dispatch, queryFulfilled, requestId }) {
        try {
          const result = await queryFulfilled;
          const previousData = JSON.parse(localStorage.getItem("auth") || "{}");
          previousData.data = result.data;
          localStorage.setItem("auth", JSON.stringify(previousData));
          dispatch(userLoggedIn(previousData));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    forget: builder.mutation({
      query: (body) => ({
        url: `${URL}/forget`,
        method: "POST",
        body,
      }),
    }),
    reset: builder.mutation({
      query: (body) => ({
        url: `${URL}/reset`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useUpdateMutation,
  useForgetMutation,
  useResetMutation,
} = authApi;
