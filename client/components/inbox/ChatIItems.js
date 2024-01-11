import { useDispatch, useSelector } from "react-redux";
import ChatItem from "./ChatItem";
import moment from "moment/moment";
import gravatarUrl from "gravatar-url";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import {
  conversationsApi,
  useGetConversationsQuery,
} from "@/redux/features/conversactions/conversactionsApi";
import Error from "../common/Error/Error";
import getPartnerInfo from "../../utils/getPartnerInfo";

export default function ChatItems() {
  const [page, setPage] = useState(1);
  const {
    data: { conversations, total } = {},
    isLoading,
    isError,
    error,
  } = useGetConversationsQuery();

  const {
    data: { email: myEmail },
  } = useSelector((state) => state.auth) || {};
  const dispatch = useDispatch();
  useEffect(() => {
    if (page > 1) {
      dispatch(
        conversationsApi.endpoints.getMoreConversations.initiate({
          limit: 20,
          page,
        })
      );
    }
  }, [page, dispatch]);
  const fetchMoreData = () => {
    setPage(page + 1);
  };
  let content = null;
  if (isLoading) {
    content = <li className="m-2 text-center">Location...</li>;
  } else if (!isLoading && isError) {
    content = (
      <li className="m-2 text-center">
        <Error message={error?.data} />
      </li>
    );
  } else if (!isLoading && !isError && conversations.length === 0) {
    content = <li className="m-2 text-center">No conversation found!</li>;
  } else if (!isLoading && !isError && conversations.length > 0) {
    content = [...conversations]
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .map((conversation) => {
        const { message, updatedAt, participant, createdBy } = conversation;
        const partnerInfo = getPartnerInfo([participant, createdBy], myEmail);
        const { name, email: partnerEmail } = partnerInfo;
        return (
          <li key={conversation._id}>
            <Link href={`/dashboard/messenger/${conversation._id}`}>
              <ChatItem
                avatar={gravatarUrl(partnerEmail, { size: 80 })}
                name={name}
                lastMessage={message}
                lastTime={moment(updatedAt).fromNow()}
              />
            </Link>
          </li>
        );
      });
  }

  return (
    <ul>
      <InfiniteScroll
        dataLength={conversations ? conversations.length : 0}
        next={fetchMoreData}
        hasMore={conversations?.length !== total}
        loader={<h4 className=" my-4 text-center text-gray-500">Loading...</h4>}
        height={window.innerHeight - 129}
      >
        {content}
      </InfiniteScroll>
    </ul>
  );
}
