import { FC, Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchMessages } from "../../store/thunks/fetchMessages";

import { NewMessage } from "../NewMessage";
import { Message } from "../Message";
import { Header } from "../Header";
import { Input } from "../Input";
import { LoaderMessages } from "../LoaderMessages";

interface ChatBodyProps {}

export const ChatBody: FC<ChatBodyProps> = ({}) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { messages, loading } = useAppSelector((state) => state.messages);
  let isNew = false;

  const returnNewMessage = () => {
    isNew = true;
    return <NewMessage />;
  };
  const sceletons = [...new Array(8)].map((_, index) => (
    <LoaderMessages key={index} />
  ));
  useEffect(() => {
    dispatch(fetchMessages(String(id)));
  }, [id]);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col gap-3 h-[calc(100vh-175px)] overflow-x-auto py-4 px-6">
        {loading === "pending" && sceletons}

        {loading === "fulfilled" &&
          messages.map((item) => (
            <Fragment key={item.id}>
              {item.is_new && !isNew ? returnNewMessage() : ""}
              <Message
                user={item.user}
                text={item.message}
                created={item.created_at}
              />
            </Fragment>
          ))}
        {loading === "failed" && <h3>Не удалось загрузить сообщения</h3>}
      </div>
      <Input />
    </div>
  );
};
