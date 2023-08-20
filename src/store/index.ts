import { configureStore } from "@reduxjs/toolkit";
import chats from "./slices/chatsSlice";
import title from "./slices/titleSlice";
import messages from "./slices/messagesSlice";

export const store = configureStore({
  reducer: {
    chats,
    title,
    messages,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
