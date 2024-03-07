import { Modal } from "@/components/Modal";
import useModal from "@/components/Modal/hooks/useModal";
import { Skeleton } from "@/components/Skeleton";
import { TaskContent } from "@/components/Task";
import { TaskCard } from "@/components/TaskCard";
import { Task } from "@/models/task";
import { getTasks } from "@/services/tasks";
import { Layout } from "@/template/Layout";
import { useQuery } from "react-query";

export type HomeProps = {
  // types...
};

const Home: React.FC<HomeProps> = () => {
  const { data } = useQuery("tasks", getTasks);
  const { open, handleOpen } = useModal();
  return (
    <Layout>
      <Modal open={open} onClose={() => handleOpen(false)}>
        <TaskCard style={{width: '100%'}}>
          <p>Titulo</p>
          <p>Descripcion</p>
          <div className="flex justify-end p-4">
          <button onClick={() => handleOpen(false)}>cerrar</button>
          </div>
        </TaskCard>
      </Modal>
      <div className="container">
        <div className="flex gap-4 flex-wrap items-center">
          {data ? (
            data?.data.map((task: Task) => (
              <TaskCard>
                <TaskContent {...task} />
              </TaskCard>
            ))
          ) : (
            <>
              {Array(8)
                .fill(8)
                .map(() => (
                  <Skeleton />
                ))}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
