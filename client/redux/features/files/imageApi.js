import { apiSlice } from "../api/apiSlice";

const url = `/image`;
export const imageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postImages: builder.mutation({
      query: (body) => ({
        url: `${url}/bulk`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Image"],
    }),
    getImages: builder.query({
      query: (page) => `${url}?page=${page || 1}}`,
      providesTags: ["Image"],
    }),

    getMoreImages: builder.query({
      query: ({ page = 1, isNew = false } = {}) => `${url}?page=${page || 1}}`,
      async onQueryStarted({ page, isNew }, { dispatch, queryFulfilled }) {
        try {
          const image = await queryFulfilled;

          if (image?.data?.images.length > 0) {
            dispatch(
              apiSlice.util.updateQueryData("getImages", 1, (draft) => {
                if (isNew) {
                  draft.images = image?.data?.images;
                  return;
                }
                draft.images.push(...image?.data?.images);
                draft.total = image?.data?.total;
                draft.page = image?.data?.page;
              })
            );
          }
        } catch (error) {
          console.log({ error });
        }
      },
      // providesTags: ["Image"],
    }),
    searchImages: builder.query({
      query: (term) => `${url}/search?term=${term || ""}}`,
      providesTags: ["Image"],
      async onQueryStarted(term, { dispatch, queryFulfilled }) {
        try {
          const image = await queryFulfilled;

          // if (image?.data?.images.length > 0) {
          dispatch(
            apiSlice.util.updateQueryData("getImages", 1, (draft) => {
              draft.images = image?.data?.images;
              draft.total = image?.data?.total;
              draft.page = image?.data?.page;
            })
          );
          // }
        } catch (error) {
          console.log({ error });
        }
      },
    }),
    deleteImage: builder.mutation({
      query: (id) => ({
        url: `${url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Image", id }],
    }),
  }),
});

export const {
  usePostImagesMutation,
  useGetImagesQuery,
  useDeleteImageMutation,
  useSearchImagesQuery,
} = imageApi;
