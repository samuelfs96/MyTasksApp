import { Modal } from "@/components/Modal";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { ClickOutside } from "../ClickOutside";

export type ModalConfirmationProps = {
  // types...
  open: boolean;
  onClose: () => void;
};

const ModalConfirmation: React.FC<ModalConfirmationProps> = ({
  open,
  onClose,
}) => {
  const task_id = useSelector((store: AppStore) => store.task_id);
  return (
    <Modal open={open} onClose={onClose}>
      <ClickOutside
        className={`
          w-2/3
          p-5
          bg-white
          dark:bg-slate-800
          ring-black 
          ring-opacity-5
          ring-1 
          border 
          border-transparent
          shadow-md
          rounded-md 
          group 
          cursor-default 
          select-none
          transition-colors`}
        onClickOutside={onClose}
      >
        <h1 className="text-lg font-bold mb-12 dark:text-white">¿Desea eliminar esta tarea?</h1>
        <div className="flex gap-2 justify-end">
          <button
            className="dark:bg-slate-600 dark:hover:bg-slate-700 dark:text-white flex gap-3 rounded-md py-2 px-4 ring-black ring-opacity-5 ring-1 shadow-sm bg-slate-50 text-sm hover:bg-slate-100"
            onClick={() => {
              console.log("la tarea :", task_id);
              onClose();
            }}
          >
            ✔ <span>Si</span>
          </button>
          <button
            className="dark:bg-slate-600 dark:hover:bg-slate-700 dark:text-white flex gap-3 rounded-md py-2 px-4 ring-black ring-opacity-5 ring-1 shadow-sm bg-slate-50 text-sm hover:bg-slate-100"
            onClick={onClose}
          >
            ❌ <span>No</span>
          </button>
        </div>
      </ClickOutside>
    </Modal>
  );
};

export default ModalConfirmation;
