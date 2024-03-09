import { useState } from "react";
import useChangeColor from "./hooks/useChangeColor";
import { ColorPicker } from "@/components/ColorPicker";
import { useDispatch } from "react-redux";
import { setId } from "@/redux/states";
import { useModalConfirmation } from "@/components/ModalConfirmation";
import useTask from "@/hooks/useTask";
import {
  ClipboardDocumentCheckIcon,
  DocumentCheckIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { SwatchIcon } from "@heroicons/react/16/solid";

export type ActionsProps = {
  task_id: string;
  completed: boolean;
  persist?: boolean;
};

const Actions: React.FC<ActionsProps> = ({ task_id, completed, persist }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { handleChangeColor, task_color } = useChangeColor({ task_id });
  const { handleOpen } = useModalConfirmation();
  const { updateTask } = useTask();
  const dispatch = useDispatch();

  const handleCompleteTask = () => {
    updateTask(task_id, {
      completed: !completed,
    });
  };

  return (
    <div className="relative">
      <div
        className={`flex gap-1 pb-2 px-2 ${
          !persist ? "opacity-0 group-hover:opacity-100" : ""
        } transition-opacity dark:text-white`}
      >
        <button
          type="button"
          onClick={handleCompleteTask}
          title="finalizar tarea"
          className="hover:bg-black hover:bg-opacity-10 w-9 h-9 rounded-full cursor-pointer flex items-center justify-center"
        >
          {!completed ? (
            <DocumentCheckIcon
              className={`h-5 w-5 text-slate-600 ${
                task_color ? "" : "dark:text-white"
              }`}
            />
          ) : (
            <ClipboardDocumentCheckIcon
              className={`h-5 w-5 text-slate-600 ${
                task_color ? "" : "dark:text-white"
              }`}
            />
          )}
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(setId(task_id));
            setOpenDropdown((prevState) => !prevState);
          }}
          title="cambiar color"
          className="hover:bg-black hover:bg-opacity-10 w-9 h-9 rounded-full cursor-pointer flex items-center justify-center"
        >
          <SwatchIcon
            className={`h-5 w-5 text-slate-600 ${
              task_color ? "" : "dark:text-white"
            }`}
          />
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(setId(task_id));
            handleOpen(true);
          }}
          title="eliminar tarea"
          className="hover:bg-black hover:bg-opacity-10 w-9 h-9 rounded-full cursor-pointer flex items-center justify-center"
        >
          <TrashIcon
            className={`h-5 w-5 text-slate-600 ${
              task_color ? "" : "dark:text-white"
            }`}
          />
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
