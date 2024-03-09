import useTheme from "@/hooks/useTheme";
import { MoonIcon } from "@heroicons/react/16/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useMemo } from "react";

export type ThemeButtonProps = {
  // types...
};

const ThemeButton: React.FC<ThemeButtonProps> = () => {
  const { handleChangeTheme, theme } = useTheme();
  const RenderIcon = useMemo(() => {
    return theme === "dark" ? (
      <MoonIcon className="h-5 w-5 text-white" />
    ) : (
      <SunIcon className="h-5 w-5 text-slate-600" />
    );
  }, [theme]);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <button
      className="ring-black 
      dark:ring-slate-700
      ring-opacity-5
      ring-1 
      border 
      border-transparent
      shadow-sm
      group
      select-none
      transition-colors
      hover:shadow-md 
      w-10 h-10 flex justify-center items-center rounded-full"
      onClick={handleChangeTheme}
    >
      {RenderIcon}
    </button>
  );
};

export default ThemeButton;
