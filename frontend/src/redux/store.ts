import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./states";

export interface AppStore {
  theme: string;
}

export default configureStore<AppStore>({
  reducer: {
    theme: themeSlice.reducer,
  },
});
