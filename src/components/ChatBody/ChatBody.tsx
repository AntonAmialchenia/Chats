import { FC, Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchMessages } from "../../store/thunks/fetchMessages";

import { NewMessage } from "../NewMessage";
import { Message } from "../Message";
import { Header } from "../Header";
import { Input } from "../Input";

interface ChatBodyProps {}

export const ChatBody: FC<ChatBodyProps> = ({}) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { messages } = useAppSelector((state) => state.messages);
  let isNew = false;

  const returnNewMessage = () => {
    isNew = true;
    return <NewMessage />;
  };

  useEffect(() => {
    dispatch(fetchMessages(String(id)));
  }, [id]);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col h-[calc(100vh-175px)] overflow-x-auto py-4 px-6">
        {messages.map((item) => (
          <Fragment key={item.id}>
            {item.is_new && !isNew ? returnNewMessage() : ""}
            <Message
              user={item.user}
              text={item.message}
              created={item.created_at}
            />
          </Fragment>
        ))}
      </div>
      <Input />
    </div>
  );
};
