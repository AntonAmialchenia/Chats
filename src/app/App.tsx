import { Sorry } from "../components/Sorry";
import { Home } from "../pages/Home";
import { store } from "../store";
import { FC } from "react";
import { Provider } from "react-redux";
import MediaQuery from "react-responsive";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <MediaQuery minWidth={700}>
        <Home />
      </MediaQuery>
      <MediaQuery maxWidth={700}>
        <Sorry />
      </MediaQuery>
    </Provider>
  );
};
