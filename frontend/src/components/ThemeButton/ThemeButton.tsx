import useTheme from "@/hooks/useTheme";
import { useEffect } from "react";

export type ThemeButtonProps = {
  // types...
};

const ThemeButton: React.FC<ThemeButtonProps> = () => {
  const { handleChangeTheme, theme } = useTheme();
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <button
      onClick={handleChangeTheme}
      className="bg-gray-200 hover:bg-gray-300 rounded-md text-sm py-2 px-6 hover:border-gray-400 border-2 dark:text-white dark:bg-neutral-600"
    >
      dark mode
    </button>
  );
};

export default ThemeButton;
