import { Modal } from "@/components/Modal";
import useModal from "@/components/Modal/hooks/useModal";
import { Skeleton } from "@/components/Skeleton";
import { TaskContent } from "@/components/Task";
import TaskView from "@/components/Task/TaskView";
import { TaskCard } from "@/components/TaskCard";
import { Task } from "@/models/task";
import { getTasks } from "@/services/tasks";
import { Layout } from "@/template/Layout";
import { useQuery } from "react-query";

export type HomeProps = {
  // types...
};

const SKE_COUNT = 8;

const Home: React.FC<HomeProps> = () => {
  const { data } = useQuery("tasks", getTasks);
  const { open, handleOpen } = useModal();
  return (
    <Layout>
      <Modal open={open} onClose={() => handleOpen(false)}>
        <TaskCard style={{ width: "100%" }}>
          <TaskView />
        </TaskCard>
      </Modal>
      <div className="container">
        <div className="flex gap-4 flex-wrap items-center">
          {data ? (
            data?.data.map((task: Task) => (
              <TaskCard key={task.id}>
                <TaskContent {...task} />
              </TaskCard>
            ))
          ) : (
            <>
              {Array(SKE_COUNT)
                .fill(SKE_COUNT)
                .map((_item, key) => (
                  <Skeleton key={key} style={{ width: "23%", height: 200 }} />
                ))}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
