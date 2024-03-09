import { useModal } from "../Modal";
import { Skeleton } from "../Skeleton";
import { getParseDate } from "@/utilities";
import { Actions } from ".";
import useChangeColor from "./Actions/hooks/useChangeColor";
import { useEffect, useState } from "react";
import useTask from "@/hooks/useTask";
import { Task } from "@/models";
import { Formik, Field, Form } from "formik";

export type TaskViewProps = {
  task_id: string;
};
interface RequestData {
  title: string
  description: string
}

const initial_state: Task = {
  id: "",
  title: "",
  description: "",
  completed: false,
  created_at: new Date(),
};

const TaskView: React.FC<TaskViewProps> = ({ task_id }) => {
  const [task, setTask] = useState(initial_state);
  const { task_color } = useChangeColor({ task_id: task_id });
  const { createTask, getTask, loading, setLoading, tasks, updateTask } = useTask();
  const { handleOpen } = useModal();

  const handleSubmit = (values: RequestData) => {
    if(task_id){
      updateTask(task_id, values).then(() => handleOpen(false))
    }else{
      createTask(values).then(() => handleOpen(false))
    }
  }

  useEffect(() => {
    if (task_id)
      getTask(task_id).then((data) => {
        if (data) setTask(data?.data);
        else setLoading(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task_id]);

  useEffect(() => {
    setTask((prev) => tasks.find((task) => task.id === prev.id) || prev);
  }, [tasks]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        title: task.title,
        description: task.description,
      }}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange }) => (
        <Form>
          <div className="flex flex-col">
            {!loading ? (
              <Field
                className={`pt-4 px-4 appearance-none bg-transparent outline-none ${
                  task.completed
                    ? "line-through text-gray-400 dark:text-gray-400"
                    : `${task_color ? "" : "dark:text-white"}`
                } mb-1 text-lg font-bold`}
                id="title"
                name="title"
                value={values.title}
                onChange={handleChange}
                placeholder="Titulo de la tarea"
              />
            ) : (
              <div className="pt-4 px-4">
                <Skeleton style={{ width: "100%", height: "2rem" }} />
              </div>
            )}
            {!loading ? (
              <div className="p-4">
                <Field
                  className={`appearance-none bg-transparent outline-none ${
                    task.completed
                      ? "line-through text-gray-400 dark:text-gray-400"
                      : `${task_color ? "" : "dark:text-white"}`
                  } mb-1 text-lg font-bold`}
                  id="description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  placeholder="Descripcion de la tarea"
                />
                <p
                  className={`text-xs text-right text-gray-500 ${
                    task.completed ? "line-through" : ""
                  }`}
                >
                  {task.created_at
                    ? "Creada: " + getParseDate(task.created_at)
                    : ""}
                </p>
              </div>
            ) : (
              <div className="p-4">
                <Skeleton
                  style={{
                    width: "90%",
                    height: "2rem",
                    marginBottom: ".5rem",
                  }}
                />
                <Skeleton
                  style={{
                    width: "80%",
                    height: "2rem",
                    marginBottom: ".5rem",
                  }}
                />
                <Skeleton style={{ width: "70%", height: "2rem" }} />
              </div>
            )}
          </div>
          <div
            className={`flex ${task_id ? "justify-between" : "justify-end"}`}
          >
            {task_id && (
              <Actions task_id={task_id} completed={task.completed} persist />
            )}
            <div className="pb-4 px-4 flex justify-start items-center gap-2">
              <button
                className={`${
                  task_color ? "" : "dark:text-white"
                } flex gap-2 rounded-md py-2 px-4 ring-black ring-opacity-5 ring-1 shadow-sm bg-transparent text-sm hover:backdrop-brightness-90`}
                type="submit"
              >
                ➕ <span>Crear tarea</span>
              </button>
              <button
                type="button"
                className={`${
                  task_color ? "" : "dark:text-white"
                } flex gap-2 rounded-md py-2 px-4 ring-black ring-opacity-5 ring-1 shadow-sm bg-transparent text-sm hover:backdrop-brightness-90`}
                onClick={() => handleOpen(false)}
              >
                ❌<span>Cerrar</span>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TaskView;
