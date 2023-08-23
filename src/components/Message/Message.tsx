import { FC } from "react";
import { Avatar } from "../Avatar";
import { Time } from "../Time";
import dayjs from "dayjs";
import clsx from "clsx";
import { UserMessage } from "../../interfaces";

interface MessageProps {
  text: string;
  created: number;

  user: UserMessage;
}

export const Message: FC<MessageProps> = ({
  text,
  created,

  user,
}) => {
  const createdMessage = dayjs(created).format("HH:mm");

  return (
    <div
      className={clsx(
        "flex gap-2 max-w-[446px] ",
        user.you && "self-end max-w-[512px]",
      )}>
      {!user.you && <Avatar size="sm" src={user.avatar} className=" rounded" />}
      <div>
        {!user.you && (
          <h5 className=" text-[15px] leading-5 font-bold mb-1">
            {user.name} {user.surname}
          </h5>
        )}
        <div
          className={clsx(
            "py-2 px-3 flex gap-1 rounded text-[15px] leading-5",
            user.you ? "bg-[#407ec914]" : "bg-[#f3f3f3]",
          )}>
          {text} {user.you && <Time created={createdMessage} />}
        </div>
      </div>
    </div>
  );
};
