import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task_id",
  initialState: "",
  reducers: {
    setId: (state, action) => {
      return action.payload;
    },
  },
});

export const { setId } = taskSlice.actions;

export default taskSlice.reducer;
