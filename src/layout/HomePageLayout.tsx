import { ChatItemList } from "../components/ChatItemList";
import { FC, ReactNode } from "react";

interface HomePageLayoutProps {
  children: ReactNode;
}

export const HomePageLayout: FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <ChatItemList />
      {children}
    </div>
  );
};
