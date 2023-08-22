import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchMessages } from "../../store/thunks/fetchMessages";
import { useParams } from "react-router-dom";
import { Time } from "../Time";
import { NewMessage } from "../NewMessage";
import { SystemMessage } from "../SystemMessage";
import { Message } from "../Message";

interface ChatBodyProps {}

export const ChatBody: FC<ChatBodyProps> = ({}) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { messages } = useAppSelector((state) => state.messages);
  console.log(messages);

  useEffect(() => {
    dispatch(fetchMessages(String(id)));
  }, [id]);

  return (
    <div className="flex flex-col justify-end py-4 px-6">
      {messages.map((item) => (
        <Message
          key={item.id}
          src={item.user.avatar}
          name={item.user.name}
          surname={item.user.surname}
          text={item.message}
          created={item.created_at}
          you={item.user.you}
        />
      ))}
      <SystemMessage date="21.03.21" />
      <NewMessage />
      <Time created={"21.03"} />
    </div>
  );
};
