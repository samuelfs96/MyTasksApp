import { useState } from "react";
import { ClickOutside } from "../../ClickOutside";
import { motion } from "framer-motion";
import useChangeColor from "./hooks/useChangeColor";

export type ActionsProps = {
  task_id: string;
  completed: boolean;
  persist?: boolean;
};

const Actions: React.FC<ActionsProps> = ({ task_id, completed, persist }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { COLORS, handleChangeColor } = useChangeColor({ task_id });

  return (
    <div className="relative">
      <div
        className={`flex gap-1 pb-4 px-4 ${
          !persist ? "opacity-0 group-hover:opacity-100" : ""
        } transition-opacity dark:text-white`}
      >
        <button
          title="finalizar tarea"
          className="flex justify-center items-center hover:bg-black hover:bg-opacity-10 w-9 h-9 rounded-full cursor-pointer"
        >
          {!completed ? "✔" : "❌"}
        </button>
        <button
          onClick={() => setOpenDropdown((prevState) => !prevState)}
          title="cambiar color"
          className="flex justify-center items-center hover:bg-black hover:bg-opacity-10 w-9 h-9 rounded-full cursor-pointer"
        >
          🎨
        </button>
        <button
          title="eliminar tarea"
          className="flex justify-center items-center hover:bg-black hover:bg-opacity-10 w-9 h-9 rounded-full cursor-pointer"
        >
          🗑
        </button>
      </div>

      {openDropdown && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
        >
          <ClickOutside
            className="relative w-full max-w-2xl max-h-full"
            onClickOutside={() => setOpenDropdown(() => false)}
          >
            <div className="absolute z-10 mt-2 -bottom-12 -left-5 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-2 flex gap-1">
                {COLORS.map((color) => (
                  <div
                    key={color}
                    onClick={() => handleChangeColor(color)}
                    className={`w-10 h-10 rounded-full border-2 cursor-pointer hover:border-slate-900 bg-${color}-200`}
                  />
                ))}
              </div>
            </div>
          </ClickOutside>
        </motion.div>
      )}
    </div>
  );
};

export default Actions;
