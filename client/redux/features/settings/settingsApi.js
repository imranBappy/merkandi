import { apiSlice } from "../api/apiSlice";

const url = `/setting`;
export const settingsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSettings: builder.query({
      query: ({ page = 1, limit = 10 } = {}) =>
        `${url}?page=${page}&limit=${limit}`,
      providesTags: ["Settings"],
    }),
    updateSettings: builder.mutation({
      query: (body) => ({
        url: `${url}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Settings"],
    }),
  }),
});

export const { useGetSettingsQuery, useUpdateSettingsMutation } = settingsApi;
