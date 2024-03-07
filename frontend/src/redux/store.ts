import { configureStore } from "@reduxjs/toolkit";
import { themeSlice,modalSlice,taskSlice } from "./states";

export interface AppStore {
  theme: string;
  modal_open: boolean;
  task_id: string;
}

export default configureStore<AppStore>({
  reducer: {
    theme: themeSlice.reducer,
    modal_open: modalSlice.reducer,
    task_id: taskSlice.reducer,
  },
});
