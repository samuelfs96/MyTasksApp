import { useSelector } from "react-redux";
import { useModal } from "../Modal";
import { AppStore } from "@/redux/store";
import { useQuery } from "react-query";
import { getTask } from "@/services/tasks";
import { Skeleton } from "../Skeleton";
import { getParseDate } from "@/utilities";
import { Actions } from ".";

export type TaskViewProps = {
  // types...
};

const TaskView: React.FC<TaskViewProps> = () => {
  const id = useSelector((store: AppStore) => store.task_id);
  const { data } = useQuery(["task", id], () => getTask(id));
  const { handleOpen } = useModal();

  return (
    <div>
      {data ? (
        <div className="pt-4 px-4">
          <h1
            className={` ${
              data.data.completed
                ? "line-through text-gray-400 dark:text-gray-400"
                : "dark:text-white"
            } mb-1 text-lg font-bold`}
          >
            {data.data.title}
          </h1>
        </div>
      ) : (
        <div className="pt-4 px-4">
          <Skeleton style={{ width: "100%", height: "2rem" }} />
        </div>
      )}
      {data ? (
        <div className="p-4">
          <p
            className={`text-sm mb-2 ${
              data.data.completed
                ? "line-through text-gray-400 dark:text-gray-400"
                : "dark:text-white"
            }`}
          >
            {data.data.description}
          </p>
          <p
            className={`text-xs text-right text-gray-500 ${
              data.data.completed ? "line-through" : ""
            }`}
          >
            {data.data.created_at ? 'Creada: ' + getParseDate(data.data.created_at) : ""}
          </p>
        </div>
      ) : (
        <>
          <div className="p-4">
            <Skeleton
              style={{ width: "90%", height: "2rem", marginBottom: ".5rem" }}
            />
            <Skeleton
              style={{ width: "80%", height: "2rem", marginBottom: ".5rem" }}
            />
            <Skeleton style={{ width: "70%", height: "2rem" }} />
          </div>
        </>
      )}
      <div className="flex justify-between">
        <Actions task_id={id} completed={data?.data.completed} persist />
        <div className="pb-4 px-4 flex justify-center items-center">
          <button
            className="px-3 py-1 bg-slate-200 rounded-md text-sm"
            onClick={() => handleOpen(false)}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskView;
