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
export const modalConfirmationSlice = createSlice({
  name: "open_confirmation",
  initialState: false,
  reducers: {
    openConfirmationModal: (_state, action) => {
      return action.payload;
    },
  },
});

export const { openModal } = modalSlice.actions;
export const { openConfirmationModal } = modalConfirmationSlice.actions;
