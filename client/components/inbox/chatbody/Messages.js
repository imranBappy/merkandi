import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { messagesApi } from "@/redux/features/messages/messagesApi";

export default function Messages({
  messages = [],
  totalCount,
  conversactionId,
}) {
  const { data = {} } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const fetchMoreData = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (page > 1) {
      dispatch(
        messagesApi.endpoints.getMoreMessages.initiate({
          conversactionId,
          page,
        })
      );
    }
  }, [page, dispatch, conversactionId]);

  return (
    <div className="relative w-full h-[calc(100vh_-_197px)] py-6  overflow-y-hidden flex flex-col-reverse">
      <ul className="space-y-2">
        <InfiniteScroll
          dataLength={messages ? messages.length : 0}
          next={fetchMoreData}
          className="scroll-container"
          hasMore={totalCount !== messages?.length}
          loader={
            <h4 className=" my-4 text-center text-gray-500">Loading...</h4>
          }
          height={window.innerHeight - 197}
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 50,
            paddingBottom: 30,
            display: "flex",
            flexDirection: "column-reverse",
            overflowX: "hidden",
          }}
          // scrollableTarget="scroll-container"
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          pullDownToRefresh
          pullDownToRefreshThreshold={window.innerHeight - 197}
          refreshFunction={fetchMoreData}
          releaseToRefreshContent={
            <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
          }
          inverse={true}
        >
          {[...messages]
            // .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((mes) => {
              const { message, _id, sender } = mes;
              const justify = sender.email === data.email ? "end" : "start";
              return (
                <Message
                  mes={mes}
                  key={_id}
                  justify={justify}
                  message={message}
                />
              );
            })}
        </InfiniteScroll>
      </ul>
    </div>
  );
}
