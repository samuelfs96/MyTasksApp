import { Loader } from "@/components/Loader";
import { ThemeButton } from "@/components/ThemeButton";
import { getTasks } from "@/services/tasks";
import { useQuery } from "react-query";

export type HomeProps = {
  // types...
};

const Home: React.FC<HomeProps> = () => {
  const { isLoading, data } = useQuery("tasks", getTasks);
  console.log(data);
  return (
    <>
      <Loader show={isLoading}/>
      <div className="h-screen w-screen flex justify-center items-center dark:bg-neutral-900">
        <ThemeButton />
      </div>
    </>
  );
};

export default Home;
