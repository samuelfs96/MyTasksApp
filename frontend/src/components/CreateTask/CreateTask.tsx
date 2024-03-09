import { useModal } from "@/components/Modal";
import { TaskCard } from "@/components/TaskCard";
import { setId } from "@/redux/states";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";
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
      <div className="text-slate-600 rounded-md w-full h-full flex justify-center items-center hover:backdrop-brightness-90 scale-95 hover:scale-100 cursor-pointer gap-2 text-lg font-bold transition-transform dark:text-white">
      <DocumentPlusIcon className="h-8 w-8" /> <span>Nueva Tarea</span>
      </div>
    </TaskCard>
  );
};

export default CreateTask;
