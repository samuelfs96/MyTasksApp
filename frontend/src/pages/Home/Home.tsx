import { CreateTask } from "@/components/CreateTask";
import { Modal } from "@/components/Modal";
import useModal from "@/components/Modal/hooks/useModal";
import {
  ModalConfirmation,
  useModalConfirmation,
} from "@/components/ModalConfirmation";
import { Skeleton } from "@/components/Skeleton";
import { TaskContent } from "@/components/Task";
import TaskView from "@/components/Task/TaskView";
import { TaskCard } from "@/components/TaskCard";
import useTask from "@/hooks/useTask";
import { Task } from "@/models/task";
import { AppStore } from "@/redux/store";
import { Layout } from "@/template/Layout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import useSocialAuth from "@/hooks/useSocialAuth";
import { CLIENT_ID } from "@/services/socialAuth";

export type HomeProps = {
  // types...
};

const SKE_COUNT = 8;

const Home: React.FC<HomeProps> = () => {
  const { getTasks, tasks, loading } = useTask();
  const { open, handleOpen } = useModal();
  const { handleOpen: handleOpenConfirmation, open: openConfirmation } =
    useModalConfirmation();
  const task_id = useSelector((store: AppStore) => store.task_id);

  const { googleLogin } = useSocialAuth();

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Modal open={open} onClose={() => handleOpen(false)}>
        <TaskCard style={{ width: "100%" }} task_id={task_id}>
          <TaskView task_id={task_id} />
        </TaskCard>
      </Modal>
      <ModalConfirmation
        open={openConfirmation}
        onClose={() => handleOpenConfirmation(false)}
      />
      <div className="container">
        <LoginSocialGoogle
          isOnlyGetToken={true}
          client_id={CLIENT_ID}
          onResolve={googleLogin}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
        <div className="flex gap-4 flex-wrap items-center justify-center max-lg:flex-col">
          {!loading ? (
            <>
              <CreateTask />
              {tasks.map((task: Task) => (
                <TaskCard key={task.id} task_id={task.id}>
                  <TaskContent {...task} />
                </TaskCard>
              ))}
            </>
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
