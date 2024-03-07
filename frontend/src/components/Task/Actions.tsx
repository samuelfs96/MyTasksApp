export type ActionsProps = {
  completed: boolean;
  persist?: boolean;
};

const Actions: React.FC<ActionsProps> = ({ completed, persist }) => {
  return (
    <div className={`flex gap-1 pb-4 px-4 ${!persist ? 'opacity-0 group-hover:opacity-100' : ''} transition-opacity dark:text-white`}>
      <button
        title="finalizar tarea"
        className="flex justify-center items-center hover:bg-black hover:bg-opacity-10 w-9 h-9 rounded-full cursor-pointer"
      >
        {!completed ? "✔" : "❌"}
      </button>
      <button
        title="cambiar color"
        className="flex justify-center items-center hover:bg-black hover:bg-opacity-10 w-9 h-9 rounded-full cursor-pointer"
      >
        🎨
      </button>
      <button
        title="eliminar tarea"
        className="flex justify-center items-center hover:bg-black hover:bg-opacity-10 w-9 h-9 rounded-full cursor-pointer"
      >
        🗑
      </button>
    </div>
  );
};

export default Actions;
