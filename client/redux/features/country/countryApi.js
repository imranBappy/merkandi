import { apiSlice } from "../api/apiSlice";

const url = `/country`;
export const CountryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postCountry: builder.mutation({
      query: (body) => ({
        url: url,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Country"],
    }),
    getCountries: builder.query({
      query: () => url,
      providesTags: ["Country"],
    }),
    getCountry: builder.query({
      query: (id) => `${url}/${id}`,
      providesTags: (result, error, id) => {
        return [{ type: "Country", id: id }];
      },
    }),
    updateCountry: builder.mutation({
      query: ({ id, body }) => ({
        url: `${url}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Country"],
    }),
  }),
});

export const {
  usePostCountryMutation,
  useGetCountriesQuery,
  useGetCountryQuery,
  useUpdateCountryMutation,
} = CountryApi;
