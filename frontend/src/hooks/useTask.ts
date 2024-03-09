import { setTasksData } from "@/redux/states";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { createApiTask, getApiTasks, updateApiTask, deleteApiTask, getApiTask } from "@/services/tasks";
import toast from "react-hot-toast";
import { useState } from "react";

function useTask() {
  const tasks = useSelector((store: AppStore) => store.tasks);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createTask = async (req: any) => {
    await createApiTask(req)
      .then(({data: {data, message}}) => {
        toast.success(message);
        dispatch(setTasksData(data));
      })
      .catch(({response: {data}}) => {
        toast.error(data.message);
        return;
      });
  };
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
  const getTask = async (id: string) => {
    setLoading(true)
    try {
      const res = await getApiTask(id);
      setLoading(false)
      return res
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      setLoading(false)
      toast.error(e.message);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateTask = async (id: string, req: any) => {
    await updateApiTask(id, req)
      .then(({ data: {data, message} }) => {
        console.log("Tarea: " + id + " status actualizado");
        toast.success(message);
        dispatch(setTasksData(data));
      })
      .catch(({response: {data}}) => {
        toast.error(data.message);
        return;
      });
  };
  const deleteTask = async (id: string) => {
    await deleteApiTask(id)
      .then(({ data }) => {
        console.log("Tarea: " + id + " eliminada");
        toast.success(data.message);
        getTasks();
      })
      .catch(({response: {data}}) => {
        toast.error(data.message);
        return;
      });
  };

  return {
    tasks,
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
    loading,
    setLoading,
  };
}

export default useTask;
