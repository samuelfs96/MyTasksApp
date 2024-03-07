export type ActionsProps = {
  id?: string;
  completed?: boolean;
};

const Actions: React.FC<ActionsProps> = ({ completed }) => {
  return (
    <div className="flex gap-1 pb-4 px-4 opacity-0 group-hover:opacity-100 transition-opacity dark:text-white">
      <button
        className="flex justify-center items-center hover:bg-black hover:bg-opacity-10 w-9 h-9 rounded-full cursor-pointer"
      >
        {!completed ? "✔" : "❌"}
      </button>
      <button
        title="change color"
        className="flex justify-center items-center hover:bg-black hover:bg-opacity-10 w-9 h-9 rounded-full cursor-pointer"
      >
        🎨
      </button>
    </div>
  );
};

export default Actions;
