import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "open",
  initialState: false,
  reducers: {
    openModal: (state, action) => {
      return action.payload;
    },
  },
});

export const { openModal } = modalSlice.actions;

export default modalSlice.reducer;
