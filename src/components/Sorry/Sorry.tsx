import { FC } from "react";

interface SorryProps {}

export const Sorry: FC<SorryProps> = ({}) => {
  return (
    <div className="flex items-center justify-center h-screen w-full font-bold text-2xl px-20">
      <h1 className=" text-center">
        ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВУ НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
      </h1>
    </div>
  );
};
