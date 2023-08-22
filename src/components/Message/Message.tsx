import { FC } from "react";
import { Avatar } from "../Avatar";
import { Time } from "../Time";
import dayjs from "dayjs";
import clsx from "clsx";

interface MessageProps {
  src: string;
  name: string;
  surname: string;
  text: string;
  created: number;
  you: boolean;
}

export const Message: FC<MessageProps> = ({
  src,
  name,
  surname,
  text,
  created,
  you,
}) => {
  const createdMessage = dayjs(created).format("HH:mm");
  return (
    <div className={clsx("flex mb-3", you && "self-end")}>
      {!you && (
        <div>
          <Avatar src={src} />
        </div>
      )}
      <div className={you ? "bg-[#407ec914]" : "bg-[#f3f3f3]"}>
        {!you && (
          <h5>
            {name} {surname}
          </h5>
        )}
        <div>
          {text} {you && <Time created={createdMessage} />}
        </div>
      </div>
    </div>
  );
};
