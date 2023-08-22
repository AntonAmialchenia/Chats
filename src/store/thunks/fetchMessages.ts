import { getMessage } from "../../api/message";
import { Message } from "../../interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMessages = createAsyncThunk<Message[], string>(
  "users/fetchMessages",
  async function (id) {
    return await getMessage(id);
  },
);
