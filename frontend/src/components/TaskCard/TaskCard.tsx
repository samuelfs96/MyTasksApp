import { getParseDate } from "@/utilities/date.utility";
import { Actions } from ".";

export type TaskCardProps = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  created_at: Date;
};

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  description,
  completed,
  created_at,
}) => {
  return (
    <>
      <div className="w-[23%] bg-gray-100 dark:bg-slate-800 border dark:border-gray-700 shadow-sm rounded-md group cursor-default select-none hover:shadow-md hover:border-gray-300 hover:dark:border-gray-800">
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
            {getParseDate(created_at)}
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
        <Actions completed={completed} id={id} />
      </div>
    </>
  );
};

export default TaskCard;
