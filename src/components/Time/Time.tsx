import { FC } from "react";
import { Birds } from "../../icons/Birds";

interface TimeProps {
  created: string;
  my: boolean;
}

export const Time: FC<TimeProps> = ({ created, my }) => {
  return (
    <div className="flex items-center gap-0.5 self-end ">
      <span className=" text-xs leading-[9px]">{created}</span>
      {my && <Birds className="text-[#407EC9]" />}
    </div>
  );
};
