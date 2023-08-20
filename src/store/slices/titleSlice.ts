import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TitleState {
  title: string;
}

const initialState: TitleState = {
  title: "",
};

export const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = titleSlice.actions;

export default titleSlice.reducer;
