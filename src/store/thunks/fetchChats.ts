import { getChatList } from "../../api/chat";
import { ChatList } from "../../interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchChats = createAsyncThunk<ChatList[]>(
  "users/fetchByIdStatus",
  getChatList,
);
