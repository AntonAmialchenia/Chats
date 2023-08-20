import { ChatList } from "../../interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchChats } from "../thunks/fetchChats";

export interface ChatsState {
  chats: ChatList[];
  loading: "pending" | "fulfilled" | "failed";
}

const initialState: ChatsState = {
  chats: [],
  loading: "pending",
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChats.pending, (state) => {
        state.loading = "pending";
        state.chats = [];
      })
      .addCase(
        fetchChats.fulfilled,
        (state, action: PayloadAction<ChatList[]>) => {
          state.chats = action.payload;
          state.loading = "fulfilled";
        },
      )
      .addCase(fetchChats.rejected, (state) => {
        state.loading = "failed";
        state.chats = [];
      });
  },
});

export default chatsSlice.reducer;
