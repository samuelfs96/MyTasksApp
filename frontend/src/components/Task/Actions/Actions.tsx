import { useState } from "react";
import useChangeColor from "./hooks/useChangeColor";
import { ColorPicker } from "@/components/ColorPicker";
import { useDispatch } from "react-redux";
import { setId } from "@/redux/states";
import { useModalConfirmation } from "@/components/ModalConfirmation";

export type ActionsProps = {
  task_id: string;
  completed: boolean;
  persist?: boolean;
};

const Actions: React.FC<ActionsProps> = ({ task_id, completed, persist }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { handleChangeColor } = useChangeColor({ task_id });
  const {handleOpen} = useModalConfirmation();
  const dispatch = useDispatch();

  return (
    <div className="relative">
      <div
        className={`flex gap-1 pb-2 px-2 ${
          !persist ? "opacity-0 group-hover:opacity-100" : ""
        } transition-opacity dark:text-white`}
      >
        <button
          title="finalizar tarea"
          className="hover:bg-black hover:bg-opacity-10 w-9 h-9 rounded-full cursor-pointer"
        >
          {!completed ? "✔" : "❌"}
        </button>
        <button
          onClick={() => {
            dispatch(setId(task_id));
            setOpenDropdown((prevState) => !prevState);
          }}
          title="cambiar color"
          className="hover:bg-black hover:bg-opacity-10 w-9 h-9 rounded-full cursor-pointer"
        >
          🎨
        </button>
        <button
          onClick={() => {
            dispatch(setId(task_id));
            handleOpen(true)
          }}
          title="eliminar tarea"
          className="hover:bg-black hover:bg-opacity-10 w-9 h-9 rounded-full cursor-pointer"
        >
          🗑
        </button>
      </div>
      <ColorPicker
        open={openDropdown}
        handleChange={handleChangeColor}
        handleClose={() => setOpenDropdown(false)}
      />
    </div>
  );
};

export default Actions;
