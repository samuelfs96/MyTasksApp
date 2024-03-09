import { useModal } from "@/components/Modal";
import { TaskCard } from "@/components/TaskCard";
import { setId } from "@/redux/states";
import { useDispatch } from "react-redux";

export type CreateTaskProps = {
  // types...
};

const CreateTask: React.FC<CreateTaskProps> = () => {
  const { handleOpen } = useModal();
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(setId(null));
    handleOpen(true);
  };
  return (
    <TaskCard
      onClick={handleOpenModal}
      style={{
        height: "10rem",
      }}
    >
      <div className="rounded-md w-full h-full flex justify-center items-center hover:backdrop-brightness-90 scale-95 hover:scale-100 cursor-pointer gap-2 text-lg font-bold transition-transform dark:text-white">
        ➕ <span>Nueva Tarea</span>
      </div>
    </TaskCard>
  );
};

export default CreateTask;
