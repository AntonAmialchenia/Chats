import { FC } from "react";
import dayjs from "dayjs";
import { setTitle } from "../../store/slices/titleSlice";
import { useAppDispatch } from "../../store/hooks";

interface ChatItemProps {
  isActive: boolean;
  avatar: string;
  title: string;
  last_message: {
    created_at: number;
    message: string;
    user_name: string;
  };
}

export const ChatItem: FC<ChatItemProps> = ({
  avatar,
  last_message,
  isActive,
  title,
}) => {
  const dispatch = useAppDispatch();
  const date = dayjs(last_message.created_at).format("HH:mm");

  return (
    <div
      onClick={() => dispatch(setTitle(title))}
      className={`flex gap-4 w-full py-3 px-4 hover:bg-[#201f1e0a] cursor-pointer transition-colors ${
        isActive && " bg-[#407ec914]"
      }`}>
      <img src={avatar} alt="" className="rounded w-12 h-12" />
      <div className=" overflow-hidden leading-5 text-[15px] text-[#605E5C]">
        <div className="flex justify-between items-center">
          <h3 className=" text-[#201F1E] font-bold">
            {last_message.user_name}
          </h3>
          <time className="text-[13px] ">{date}</time>
        </div>
        <p className="truncate">{last_message.message}</p>
      </div>
    </div>
  );
};
