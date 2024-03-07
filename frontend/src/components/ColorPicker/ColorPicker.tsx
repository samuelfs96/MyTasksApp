import { ClickOutside } from "@/components/ClickOutside";
import { motion } from "framer-motion";
import { useMemo } from "react";

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
  const COLORS = useMemo(
    () => [
      "default",
      "bg-igreen",
      "bg-iyellow",
      "bg-ired",
      "bg-iblue",
      "bg-ipurple",
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
                      handleClose();
                    }}
                    className={`w-10 h-10 rounded-full border-2 cursor-pointer hover:border-slate-900 ${
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
