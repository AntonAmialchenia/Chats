import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePageLayout } from "../layout";
import { FC } from "react";
import { ChatBody } from "../components/ChatBody";

export const Home: FC = () => {
  return (
    <HashRouter>
      <HomePageLayout>
        <main className="w-full">
          <Routes>
            <Route path="/:id" element={<ChatBody />} />
          </Routes>
        </main>
      </HomePageLayout>
    </HashRouter>
  );
};
