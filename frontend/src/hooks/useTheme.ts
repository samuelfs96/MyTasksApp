import { changeTheme } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function useTheme() {
  const theme = useSelector((store: AppStore) => store.theme);
  const [internalTheme, setInternalTheme] = useState("");
  const dispatch = useDispatch();
  const handleChangeTheme = () => {
    dispatch(changeTheme(internalTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    setInternalTheme(theme);
  }, [theme]);

  return {
    theme,
    handleChangeTheme,
  };
}

export default useTheme;
