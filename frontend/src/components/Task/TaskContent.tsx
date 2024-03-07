import { getParseDate } from "@/utilities";
import React, { useCallback } from "react";
import Actions from "./Actions";
import useModal from "../Modal/hooks/useModal";
import { useDispatch } from "react-redux";
import { setId } from "@/redux/states";

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
  const handleOpenModal = useCallback(() => {
    dispatch(setId(id));
    handleOpen(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      <div onClick={handleOpenModal}>
        <div className="pt-4 px-4">
          <h1
            className={` ${
              completed
                ? "line-through text-gray-400 dark:text-gray-400"
                : "dark:text-white"
            } mb-1 text-lg font-bold`}
          >
            {title}
          </h1>
          <p
            className={`text-xs text-gray-500 ${
              completed ? "line-through" : ""
            }`}
          >
            {created_at ? getParseDate(created_at) : ""}
          </p>
        </div>
        <div className="p-4">
          <p
            className={` text-sm ${
              completed
                ? "line-through text-gray-400 dark:text-gray-400"
                : "dark:text-white"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      <Actions completed={completed} />
    </>
  );
};

export default TaskContent;
