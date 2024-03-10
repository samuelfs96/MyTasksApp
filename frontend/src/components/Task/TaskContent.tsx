import { getParseDate } from "@/utilities";
import { useCallback } from "react";
import useModal from "../Modal/hooks/useModal";
import { useDispatch } from "react-redux";
import { setId } from "@/redux/states";
import { Actions } from ".";
import useChangeColor from "./Actions/hooks/useChangeColor";
import { PencilSquareIcon } from "@heroicons/react/16/solid";

export type TaskContentProps = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  created_at: Date;
};

const TaskContent: React.FC<TaskContentProps> = ({
  id,
  title,
  description,
  completed,
  created_at,
}) => {
  const { handleOpen } = useModal();
  const dispatch = useDispatch();
  const { task_color } = useChangeColor({ task_id: id });
  const handleOpenModal = useCallback(() => {
    dispatch(setId(id));
    handleOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <div onClick={handleOpenModal}>
        {(title.length > 0 && description.length > 0) ? (
          <>
            <div className="pt-4 px-4">
              <h1
                className={` ${
                  completed
                    ? "line-through text-gray-400 dark:text-gray-400"
                    : `${task_color ? "" : "dark:text-white"}`
                } mb-1 text-lg font-bold text-slate-600`}
              >
                {title}
              </h1>
              <p
                className={`text-xs text-gray-500 ${
                  completed ? "line-through" : ""
                }`}
              >
                {created_at ? "Creada: " + getParseDate(created_at) : ""}
              </p>
            </div>
            <div className="p-4">
              <p
                className={`whitespace-pre-line text-slate-600 text-sm ${
                  completed
                    ? "line-through text-gray-400 dark:text-gray-400"
                    : `${task_color ? "" : "dark:text-white"}`
                }`}
              >
                {description}
              </p>
            </div>
          </>
        ) : (
          <div className="p-4">
            <h1
                className={`flex items-center gap-2 ${
                  completed
                    ? "line-through text-gray-400 dark:text-gray-400"
                    : `${task_color ? "" : "dark:text-white"}`
                } mb-1 text-xl font-semibold text-slate-600`}
              >
                <PencilSquareIcon className="w-5 h-5"/> <span>Tarea incompleta</span>
              </h1>
          </div>
        )}
      </div>
      <Actions task_id={id} completed={completed} />
    </>
  );
};

export default TaskContent;
