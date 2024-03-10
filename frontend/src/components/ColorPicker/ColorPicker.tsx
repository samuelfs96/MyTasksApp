import { ClickOutside } from "@/components/ClickOutside";
import { AppStore } from "@/redux/store";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import useChangeColor from "@/components/Task/Actions/hooks/useChangeColor";

export type ColorPickerProps = {
  open: boolean;
  handleChange: (color: string) => void;
  handleClose: () => void;
};

const ColorPicker: React.FC<ColorPickerProps> = ({
  open,
  handleChange,
  handleClose,
}) => {
  const id = useSelector((store: AppStore) => store.task_id);
  const { task_color } = useChangeColor({ task_id: id });
  const COLORS = useMemo(
    () => [
      "default",
      "bg-igreen",
      "bg-iyellow",
      "bg-ired",
      "bg-iblue",
      "bg-ipeach",
    ],
    []
  );
  return (
    <>
      {open && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
        >
          <ClickOutside
            className="relative w-full max-w-2xl max-h-full"
            onClickOutside={handleClose}
          >
            <div className="absolute z-10 mt-2 -bottom-12 -left-5 rounded-md bg-white dark:bg-slate-800 border dark:border-gray-700 hover:dark:border-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-2 flex gap-1">
                {COLORS.map((color) => (
                  <div
                    key={color}
                    onClick={() => {
                      handleChange(color);
                    }}
                    className={`w-10 h-10 rounded-full border-2 cursor-pointer hover:brightness-90 ${task_color?.color === color ? 'brightness-75 border-slate-400' : '' } ${
                      color === "default" ? "bg-gray-100" : color
                    }`}
                  />
                ))}
              </div>
            </div>
          </ClickOutside>
        </motion.div>
      )}
    </>
  );
};

export default ColorPicker;
