import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchMessages } from "../../store/thunks/fetchMessages";
import { useParams } from "react-router-dom";

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
    <div className="">
      <h1>ChatBody component</h1>
    </div>
  );
};
