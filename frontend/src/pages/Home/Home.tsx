import { Skeleton } from "@/components/Skeleton";
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
  return (
    <Layout>
      <div className="container">
        <div className="flex gap-4 flex-wrap items-center">
          {data ? (
            data?.data.map((task: Task) => <TaskCard {...task} />)
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
