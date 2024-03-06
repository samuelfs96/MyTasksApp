import { LocalStorageTypes } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

export const themeSlice = createSlice({
  name: "theme",
  initialState: getLocalStorage(LocalStorageTypes.THEME) || initialState,
  reducers: {
    changeTheme: (state, action) => {
      setLocalStorage(
        LocalStorageTypes.THEME,
        state === "light" ? "dark" : "light"
      );
      return action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
