import { configureStore } from "@reduxjs/toolkit";
import {
  themeSlice,
  modalSlice,
  taskSlice,
  taskColorSlice,
  modalConfirmationSlice,
  tasksSlice,
  socialUserSlice,
} from "./states";
import { Task } from "@/models";
import { SocialUser } from "@/models/social_user";

export interface AppStore {
  theme: string;
  modal_open: boolean;
  open_confirmation: boolean;
  task_id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  task_color: any;
  tasks: Task[];
  social_user: SocialUser;
}

export default configureStore<AppStore>({
  reducer: {
    theme: themeSlice.reducer,
    modal_open: modalSlice.reducer,
    open_confirmation: modalConfirmationSlice.reducer,
    task_id: taskSlice.reducer,
    task_color: taskColorSlice.reducer,
    tasks: tasksSlice.reducer,
    social_user: socialUserSlice.reducer,
  },
});
