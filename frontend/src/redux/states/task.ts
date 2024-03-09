import { LocalStorageTypes, Task } from "@/models";
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

const initial_tasks_data: Task[] = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initial_tasks_data,
  reducers: {
    setTasksData: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setId } = taskSlice.actions;
export const { setColor } = taskColorSlice.actions;
export const { setTasksData } = tasksSlice.actions;
