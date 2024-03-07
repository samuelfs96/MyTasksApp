import { AppStore } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "@/redux/states";
import { useMemo } from "react";

const COLORS = ["red", "blue", "yellow", "green"];
interface ChangeColorType {
  task_id?: string;
}

function useChangeColor({ task_id }: ChangeColorType) {
  const tasks_colored = useSelector((store: AppStore) => store.task_color);
  const dispatch = useDispatch();

  const task_color = useMemo(
    () => tasks_colored.find((tc: { id: string }) => tc?.id === task_id),
    [tasks_colored, task_id]
  );

  const handleChangeColor = (color: string) => {
    const filter_tasks = !tasks_colored.find(
      (tc: { id: string }) => tc.id === task_id
    )
      ? tasks_colored
      : tasks_colored.filter((tc: { id: string }) => tc.id !== task_id);
    dispatch(setColor([...filter_tasks, { id: task_id, color: color }]));
  };

  return {
    handleChangeColor,
    tasks_colored,
    task_color,
    COLORS,
  };
}

export default useChangeColor;
