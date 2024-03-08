import { motion } from "framer-motion";
import { ClickOutside } from "@/components/ClickOutside";

export type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
  return (
    <>
      {open && (
        <div className="pt-40 backdrop-contrast-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full">
          <motion.div
            key="modal"
            className="flex justify-center md:inset-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          >
            <ClickOutside
              className="relative w-full max-w-xl max-h-full flex justify-center"
              onClickOutside={onClose}
            >
              {children}
            </ClickOutside>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;
