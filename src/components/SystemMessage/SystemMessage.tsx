import { FC } from "react";

interface SystemMessageProps {
  date: string;
}

export const SystemMessage: FC<SystemMessageProps> = ({ date }) => {
  return (
    <div className=" bg-[#407ec914] py-2 px-3 self-center mb-3 text-xs">
      <p>{date}</p>
    </div>
  );
};
