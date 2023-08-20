import { FC, useEffect } from "react";
import { ChatItem } from "../ChatItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchChats } from "../../store/thunks/fetchChats";
import { Loader } from "../Loader";

export const ChatItemList: FC = () => {
  const dispatch = useAppDispatch();
  const { chats, loading } = useAppSelector((state) => state.chats);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  const sceletons = [...new Array(12)].map((_, index) => (
    <Loader key={index} />
  ));

  return (
    <div className="max-w-[22.5rem] w-full shadow-[-1px_0_0_0_rgba(32,31,30,0.12)_inset] overflow-y-auto h-screen">
      <h2 className=" py-5 px-4 font-bold text-lg">All chats</h2>
      {loading === "pending" && sceletons}
      {loading === "fulfilled" &&
        chats.map((item) => (
          <ChatItem
            key={item.id}
            id={item.id}
            isActive
            title={item.title}
            avatar={item.avatar}
            last_message={item.last_message}
          />
        ))}
      {loading === "failed" && <h1>Не удалось загрузить список чатов</h1>}
    </div>
  );
};
