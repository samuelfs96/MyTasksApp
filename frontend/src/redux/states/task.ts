import { LocalStorageTypes } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
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
  initialState: getLocalStorage(LocalStorageTypes.TASKCOLOR)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.TASKCOLOR) as string)
    : [],
  reducers: {
    setColor: (_state, action) => {
      setLocalStorage(LocalStorageTypes.TASKCOLOR, action.payload);
      return action.payload;
    },
  },
});

export const { setId } = taskSlice.actions;
export const { setColor } = taskColorSlice.actions;
