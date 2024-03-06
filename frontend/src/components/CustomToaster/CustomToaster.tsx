import { Transition } from "@headlessui/react";
import { Toaster, ToastIcon, resolveValue } from "react-hot-toast";

export type CustomToasterProps = {
  // types...
};

const CustomToaster: React.FC<CustomToasterProps> = () => {
  return (
    <Toaster position="bottom-left">
      {(t) => (
        <Transition
          appear
          show={t.visible}
          className="transform p-3 flex dark:text-white dark:bg-neutral-600 rounded-lg shadow-md"
          enter="transition-all duration-150"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <ToastIcon toast={t} />
          <p className="px-3 text-sm">{resolveValue(t.message, t)}</p>
        </Transition>
      )}
    </Toaster>
  );
};

export default CustomToaster;
