import { configureStore } from "@reduxjs/toolkit";
import {
  themeSlice,
  modalSlice,
  taskSlice,
  taskColorSlice,
  modalConfirmationSlice,
  tasksSlice,
} from "./states";
import { Task } from "@/models";

export interface AppStore {
  theme: string;
  modal_open: boolean;
  open_confirmation: boolean;
  task_id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  task_color: any;
  tasks: Task[];
}

export default configureStore<AppStore>({
  reducer: {
    theme: themeSlice.reducer,
    modal_open: modalSlice.reducer,
    open_confirmation: modalConfirmationSlice.reducer,
    task_id: taskSlice.reducer,
    task_color: taskColorSlice.reducer,
    tasks: tasksSlice.reducer,
  },
});
