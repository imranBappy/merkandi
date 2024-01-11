import store from "@/redux/store/store";
import { apiSlice } from "../api/apiSlice";
// type queryType{
//     getBlog: any

// }

export const commentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postComment: builder.mutation({
      query: ({ body, blogId }) => ({
        url: `/comment/${blogId}`,
        method: "POST",
        body: { body: body },
      }),
      async onQueryStarted({ body, blogId }, { dispatch, queryFulfilled }) {
        // cash optimistic update
        const patchResult = dispatch(
          commentApi.util.updateQueryData("getBlog", blogId, (draft) => {
            // write the type of this method
            const currentUser = store.getState().auth.user;
            const newComment = {
              _id: Date.now(),
              body: body,
              user: {
                _id: currentUser._id,
                name: currentUser.name,
                url: currentUser.url,
              },
              createdAt: new Date().toISOString(),
            };
            draft.comments.unshift(newComment);
          })
        );
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { usePostCommentMutation } = commentApi;
