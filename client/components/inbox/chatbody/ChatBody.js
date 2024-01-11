// import Blank from "./Blank";
import ChatHead from "./ChatHead";
// import Messages from "./Messages";
// import Options from "./Options";
import { useSelector } from "react-redux";
import gravatarUrl from "gravatar-url";
import { useGetMessagesQuery } from "@/redux/features/messages/messagesApi";
import Error from "@/components/common/Error/Error";
import getPartnerInfo from "@/utils/getPartnerInfo";
import Messages from "./Messages";
import Options from "./Options";

export default function ChatBody({ conversactionId }) {
  const limit = 20;
  const page = 1;

  const {
    data: { messages = [], total } = {},
    isLoading,
    isError,
    error,
  } = useGetMessagesQuery({
    conversactionId,
    limit,
    page,
  });

  const { data = {} } = useSelector((state) => state.auth);

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <div className=" text-center mt-10">Loading...</div>;
  } else if (!isLoading && isError) {
    content = <Error message={error.message} />;
  } else if (!isLoading && !isError && messages?.length === 0) {
    content = <div className=" text-center mt-10">No messages found!</div>;
  } else if (!isLoading && !isError && messages?.length > 0) {
    const partner = getPartnerInfo(
      [messages[0]?.receiver, messages[0]?.sender],
      data?.email
    );

    content = (
      <>
        <ChatHead
          avatar={gravatarUrl(partner?.email, { size: 80 })}
          name={partner?.name}
          _id={partner?._id}
        />
        <Messages
          totalCount={total}
          messages={messages}
          conversactionId={conversactionId}
        />
        <Options info={messages[0]} />
      </>
    );
  }

  return (
    <div className="w-full lg:col-span-2 lg:block">
      <div className="w-full grid conversation-row-grid">
        {content}
        {/* <Blank /> */}
      </div>
    </div>
  );
}
