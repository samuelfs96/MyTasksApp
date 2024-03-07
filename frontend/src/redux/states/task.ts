import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task_id",
  initialState: "",
  reducers: {
    setId: (_state, action) => {
      return action.payload;
    },
  },
});

export const taskColorSlice = createSlice({
  name: "task_color",
  initialState: [],
  reducers: {
    setColor: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setId } = taskSlice.actions;
export const { setColor } = taskColorSlice.actions;