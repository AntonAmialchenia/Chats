import { configureStore } from "@reduxjs/toolkit";
import chats from "./slices/chatsSlice";
import title from "./slices/titleSlice";

export const store = configureStore({
  reducer: {
    chats,
    title,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
