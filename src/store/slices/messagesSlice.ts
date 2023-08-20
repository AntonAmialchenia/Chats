import { Message } from "../../interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchMessages } from "../thunks/fetchMessages";

export interface MessagesState {
  messages: Message[];
  loading: "pending" | "fulfilled" | "failed";
}

const initialState: MessagesState = {
  messages: [],
  loading: "pending",
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.loading = "pending";
        state.messages = [];
      })
      .addCase(
        fetchMessages.fulfilled,
        (state, action: PayloadAction<Message[]>) => {
          state.messages = action.payload;
          state.loading = "fulfilled";
        },
      )
      .addCase(fetchMessages.rejected, (state) => {
        state.loading = "failed";
        state.messages = [];
      });
  },
});

export default messagesSlice.reducer;
