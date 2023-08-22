import clsx from "clsx";
import { FC } from "react";

interface AvatarProps {
  className?: string;
  src: string;
  size?: string;
}

export const Avatar: FC<AvatarProps> = ({ src, size = "sm", className }) => {
  const avatarClassName = clsx(
    className,
    {
      sm: " w-8 h-8",
      md: "w-12 h-12",
    }[size],
  );

  return <img src={src} alt="" className={avatarClassName} />;
};
