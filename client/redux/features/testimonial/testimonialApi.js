import { apiSlice } from "../api/apiSlice";

const url = `/testimonial`;
export const testimonialApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postTestimonial: builder.mutation({
      query: (body) => ({
        url: url,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Testimonial"],
    }),
    getTestimonials: builder.query({
      query: ({ page = 1, limit = 10 } = {}) =>
        `${url}?page=${page}&limit=${limit}`,
      providesTags: ["Testimonial"],
    }),
    getTestimonial: builder.query({
      query: (id) => `${url}/${id}`,
      invalidatesTags: ["Testimonial"],
    }),
    updateTestimonial: builder.mutation({
      query: ({ id, body }) => ({
        url: `${url}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Testimonial"],
    }),
    deleteTestimonial: builder.mutation({
      query: (id) => ({
        url: `${url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Testimonial"],
    }),
  }),
});

export const {
  usePostTestimonialMutation,
  useGetTestimonialsQuery,
  useGetTestimonialQuery,
  useUpdateTestimonialMutation,
  useDeleteTestimonialMutation,
} = testimonialApi;
