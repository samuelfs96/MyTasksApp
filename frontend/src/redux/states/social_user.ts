import { LocalStorageTypes } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  verified_email: false,
  name: "",
  given_name: "",
  family_name: "",
  picture: "",
  locale: "",
};

export const socialUserSlice = createSlice({
  name: "social_user",
  initialState: getLocalStorage(LocalStorageTypes.SOCIAL_USER)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.SOCIAL_USER) as string)
    : initialState,
  reducers: {
    setSocialUserData: (_state, action) => {
      setLocalStorage(LocalStorageTypes.SOCIAL_USER, action.payload);
      return action.payload;
    },
  },
});

export const { setSocialUserData } = socialUserSlice.actions;

export default socialUserSlice.reducer;
