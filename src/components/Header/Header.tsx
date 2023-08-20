import { Shape } from "../../icons/Shape";
import { useAppSelector } from "../../store/hooks";
import { FC } from "react";

export const Header: FC = () => {
  const { title } = useAppSelector((state) => state.title);
  console.log(title);

  return (
    <header className="flex items-center gap-2 px-4 py-5 shadow-[0_-1px_0_0_rgba(32,31,30,0.12)_inset]">
      <Shape className=" w-6 h-6 text-[#A19F9D]" />
      <h1 className=" text-lg font-bold ">{title}</h1>
    </header>
  );
};
