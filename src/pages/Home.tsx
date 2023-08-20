import { Header } from "../components/Header";
import { HomePageLayout } from "../layout";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <HomePageLayout>
      <main className="w-full">
        <Header /> Chat
      </main>
    </HomePageLayout>
  );
};
