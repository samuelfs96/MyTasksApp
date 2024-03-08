import { configureStore } from "@reduxjs/toolkit";
import { themeSlice,modalSlice,taskSlice,taskColorSlice, modalConfirmationSlice } from "./states";

export interface AppStore {
  theme: string;
  modal_open: boolean;
  open_confirmation: boolean;
  task_id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  task_color: any;
}

export default configureStore<AppStore>({
  reducer: {
    theme: themeSlice.reducer,
    modal_open: modalSlice.reducer,
    open_confirmation: modalConfirmationSlice.reducer,
    task_id: taskSlice.reducer,
    task_color: taskColorSlice.reducer,
  },
});
