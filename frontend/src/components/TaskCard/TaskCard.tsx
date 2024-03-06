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
    <div className="w-[23%] bg-red-400">
      <p>id: {id}</p>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Completed: {completed ? "yes" : "no"}</p>
      <p>Created at: {created_at.toString()}</p>
    </div>
  );
};

export default TaskCard;
