import { getTasks } from "../../../actions/actions";
import ConfirmDelete from "../components/ConfirmDelete";
import { CreateOrUpdateButton } from "../components/CreateUpdateBtn";
import DeleteTaskButton from "../components/DeleteTaskButton";
import TaskCard from "../components/TaskCard";
import { Task } from "../types/Task";

export default async function Home() {
  const tasks = await getTasks();
  return (
    <div className="grid justify-center items-center">
      <h1>Lista de tasks</h1>
      <div className="grid grid-cols-5 gap-6">
        {tasks.map((task: Task) => (
          <TaskCard key={task.id} {...task} />
        ))}
        <div className="w-[15rem] h-[20rem] font-light grid rounded-xl justify-center items-center border bg-green-300 border-gray-400 shadow-2xl">
          <CreateOrUpdateButton type="create" />
          <DeleteTaskButton type="all" />
          <DeleteTaskButton type="completed" />
        </div>
      </div>
    </div>
  );
}
