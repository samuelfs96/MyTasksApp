export type TaskCardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const TaskCard: React.FC<TaskCardProps> = ({children, style}) => {
  return (
    <>
      <div style={style} className={`w-[22%] bg-gray-100 dark:bg-slate-800 border dark:border-gray-700 shadow-sm rounded-md group cursor-default select-none hover:shadow-md hover:border-gray-300 hover:dark:border-gray-800`}>
        {children}
      </div>
    </>
  );
};

export default TaskCard;
