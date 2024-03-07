import { configureStore } from "@reduxjs/toolkit";
import { themeSlice,modalSlice } from "./states";

export interface AppStore {
  theme: string;
  modal_open: boolean;
}

export default configureStore<AppStore>({
  reducer: {
    theme: themeSlice.reducer,
    modal_open: modalSlice.reducer,
  },
});
