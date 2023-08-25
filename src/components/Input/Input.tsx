import { FC } from "react";
import { Attach } from "../../icons/Attach";
import { Send } from "../../icons/Send";

interface InputProps {}

export const Input: FC<InputProps> = ({}) => {
  return (
    <div className="py-4 px-6 ">
      <div
        contentEditable
        placeholder="Type messsage"
        className="max-h-[86px] w-full mb-1 border-[#A19F9D] border rounded px-4 py-2.5 text-[15px] leading-5 overflow-y-auto "></div>
      <div className="flex justify-between">
        <button className="hover:bg-[#201f1e0a] p-1.5 transition-colors ">
          <Attach className="h-5 w-5" />
        </button>
        <button className="hover:bg-[#201f1e0a] p-1.5 transition-colors">
          <Send />
        </button>
      </div>
    </div>
  );
};
