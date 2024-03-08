import { AppStore } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { openConfirmationModal } from "@/redux/states";

function useModalConfirmation() {
  const open = useSelector((store: AppStore) => store.open_confirmation);
  const dispatch = useDispatch();
  const handleOpen = (value: boolean) => dispatch(openConfirmationModal(value));
  return {
    open,
    handleOpen
  };
}

export default useModalConfirmation;
