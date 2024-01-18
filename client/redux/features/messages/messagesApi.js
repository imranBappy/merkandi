import { apiSlice } from "../api/apiSlice";

import { io } from "socket.io-client";
const baseUrl = process.env.NEXT_PUBLIC_HOST;

export const messagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: ({ conversactionId, limit = 20, page = 1 }) =>
        `/message/all/${conversactionId}?limit=${limit}&page=${page}`,
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheEntryRemoved, cacheDataLoaded, getState }
      ) {
        try {
          await cacheDataLoaded;
          const socket = io(baseUrl, {
            reconnectionDelay: 1000,
            reconnection: true,
            reconnectionAttemps: 10,
            transports: ["websocket"],
            agent: false,
            upgrade: false,
            rejectUnauthorized: false,
          });

          const { data: authData } = getState().auth;

          socket.on("newMessage", (data) => {
            const isMyMessage =
              data.sender.email === authData.email ||
              data.receiver.email === authData.email;
            if (isMyMessage) {
              if (data.conversation === arg.conversactionId) {
                updateCachedData((draft) => {
                  draft.messages.unshift(data);
                });
              }
            }
          });
        } catch (error) {
          console.log(error);
        }
        await cacheEntryRemoved;
      },
    }),
    // for infinite scroll
    getMoreMessages: builder.query({
      query: ({ page, conversactionId, limit = 20 }) =>
        `/message/all/${conversactionId}?page=${page}&limit=${limit}`,
      async onQueryStarted(
        { conversactionId, limit, page },
        { dispatch, queryFulfilled }
      ) {
        try {
          const { data } = await queryFulfilled;
          let { messages } = data;
          if (messages?.length > 0) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getMessages",
                { conversactionId, limit: 20, page: 1 },
                (draft) => {
                  draft.messages.push(...messages);
                }
              )
            );
          }
        } catch (error) {}
      },
    }),
    addMessage: builder.mutation({
      query: (data) => ({
        url: `/message/send`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useGetMoreMessagesQuery,
  useAddMessageMutation,
} = messagesApi;
