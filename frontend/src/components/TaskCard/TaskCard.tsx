import useChangeColor from "@/components/Task/Actions/hooks/useChangeColor";

export type TaskCardProps = {
  task_id?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const TaskCard: React.FC<TaskCardProps> = ({ children, style, task_id, onClick }) => {
  const { task_color } = useChangeColor({ task_id });
  return (
    <>
      <div
        style={style}
        className={`
          w-[22%]
          ${
            task_color && task_color.id === task_id
              ? task_color.color
              : "bg-gray-100 dark:bg-slate-800 dark:border-gray-700 hover:dark:border-gray-800"
          }
          ring-black 
          ring-opacity-5
          ring-1 
          border 
          border-transparent
          shadow-sm
          rounded-md 
          group 
          cursor-default 
          select-none
          transition-colors
          hover:shadow-md`}
        onClick={onClick}
      >
        {children}
      </div>
    </>
  );
};

export default TaskCard;
