import { setTasksData } from "@/redux/states";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { getApiTasks, updateApiTask } from "@/services/tasks";
import toast from "react-hot-toast";
import { useState } from "react";

function useTask() {
  const tasks = useSelector((store: AppStore) => store.tasks);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const getTasks = () => {
    setLoading(true)
    getApiTasks()
      .then(({ data }) => {
        dispatch(setTasksData(data));
        setLoading(false)
      })
      .catch((error) => {
        setLoading(true)
        console.log(error);
        return;
      });
  };
  const getTask = (id) => {
    //---
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateTask = (id: string, req: any) => {
    updateApiTask(id, req)
      .then(({ data }) => {
        console.log("Tarea: " + id + " status actualizado");
        dispatch(setTasksData(data));
      })
      .catch(({response: {data}}) => {
        toast.error(data.message);
        return;
      });
  };
  const deleteTask = (id) => {
    //---
  };

  return {
    tasks,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
    loading,
    setLoading,
  };
}

export default useTask;
