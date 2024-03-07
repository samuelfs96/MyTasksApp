import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "open",
  initialState: false,
  reducers: {
    openModal: (_state, action) => {
      return action.payload;
    },
  },
});

export const { openModal } = modalSlice.actions;

export default modalSlice.reducer;
