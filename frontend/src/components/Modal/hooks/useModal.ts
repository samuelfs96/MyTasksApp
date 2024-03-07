import { AppStore } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/redux/states";

function useModal() {
  const open = useSelector((store: AppStore) => store.modal_open);
  const dispatch = useDispatch();
  const handleOpen = (value: boolean) => dispatch(openModal(value));
  return {
    open,
    handleOpen,
  };
}

export default useModal;
