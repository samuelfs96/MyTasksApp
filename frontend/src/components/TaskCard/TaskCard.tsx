import useChangeColor from "@/components/Task/Actions/hooks/useChangeColor";

export type TaskCardProps = {
  task_id?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const TaskCard: React.FC<TaskCardProps> = ({ children, style, task_id }) => {
  const { task_color } = useChangeColor({ task_id });
  return (
    <>
      <div
        style={style}
        className={`w-[22%] bg-${
          task_color && task_color.id === task_id
            ? task_color.color + "-200"
            : "gray-100"
        } dark:bg-slate-800 border dark:border-gray-700 shadow-sm rounded-md group cursor-default select-none hover:shadow-md hover:border-gray-300 hover:dark:border-gray-800`}
      >
        {children}
      </div>
    </>
  );
};

export default TaskCard;
