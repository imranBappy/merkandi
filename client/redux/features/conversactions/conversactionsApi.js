import { apiSlice } from "../api/apiSlice";
import { io } from "socket.io-client";
// X-Total-Count

export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: ({ page = 1, limit = 20 } = {}) =>
        `/message?page=${page}&limit=${limit}`,
      async onCacheEntryAdded(
        arg,
        {
          updateCachedData,
          cacheDataLoaded,
          dispatch,
          cacheEntryRemoved,
          getState,
        }
      ) {
        const socket = io(process.env.NEXT_PUBLIC_HOST, {
          reconnectionDelay: 1000,
          reconnection: true,
          reconnectionAttemps: 10,
          transports: ["websocket"],
          agent: false,
          upgrade: false,
          rejectUnauthorized: false,
        });
        try {
          await cacheDataLoaded;
          const { data: authData } = getState().auth;
          socket.on("newConversation", (data) => {
            const isMyMessage =
              data?.conversation?.createdBy?.email === authData.email ||
              data?.conversation?.participant?.email === authData.email;
            updateCachedData((draft) => {
              if (isMyMessage) {
                const conversation = draft?.conversations?.find(
                  (c) => c._id === data.conversation._id
                );
                if (conversation) {
                  conversation.updatedAt = data.conversation.updatedAt;
                  const updatedConversation = draft?.conversations?.map((c) => {
                    if (c._id === data.conversation._id) {
                      return conversation;
                    }
                    return c;
                  });
                  draft.conversations = updatedConversation;
                } else {
                  draft?.conversations?.unshift(data.conversation);
                }
              }
            });
          });
        } catch (error) {}
        await cacheEntryRemoved;
        socket.close();
      },
    }),
    // for infinite scroll
    getMoreConversations: builder.query({
      query: ({ page = 1, limit = 20 }) =>
        `/message?page=${page}&limit=${limit}`,
      async onQueryStarted({ page, limit }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { conversations } = data;
          if (conversations?.length > 0) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getConversations",
                { page: 1, limit: 20 },
                (draft) => {
                  draft.conversations.push(...conversations);
                }
              )
            );
          }
        } catch (error) {}
      },
    }),

    addConversation: builder.mutation({
      query: (data) => ({
        url: `/message`,
        method: "POST",
        body: data,
      }),
    }),

    // messages
  }),
});

export const {
  useGetConversationsQuery,
  useGetMoreConversationsQuery,
  useAddConversationMutation,
} = conversationsApi;
