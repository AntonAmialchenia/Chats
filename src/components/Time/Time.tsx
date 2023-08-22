import { FC } from "react";
import { Birds } from "../../icons/Birds";

interface TimeProps {
  created: string;
}

export const Time: FC<TimeProps> = ({ created }) => {
  return (
    <div className="flex items-center gap-0.5">
      <span className=" text-xs leading-[9px]">{created}</span>
      <Birds className="text-[#407EC9]" />
    </div>
  );
};
