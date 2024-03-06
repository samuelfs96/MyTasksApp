import { LocalStorageTypes } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "light";

export const themeSlice = createSlice({
  name: "theme",
  initialState: getLocalStorage(LocalStorageTypes.THEME)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.THEME) as string)
    : initialState,
  reducers: {
    changeTheme: (state, action) => {
      setLocalStorage(LocalStorageTypes.THEME, state);
      return action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
