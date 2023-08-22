import { FC } from "react";

interface NewMessageProps {}

export const NewMessage: FC<NewMessageProps> = ({}) => {
  return (
    <div className=" px-3 py-1 bg-[#407ec914] w-full mb-3">
      <p className=" text-[#407EC9] text-xs text-center">Новые сообщения</p>
    </div>
  );
};
