import Link from "next/link";
import { TaskStatus } from "../enums/TaskStatus";
import { Task } from "../types/Task";

const statusMap: { [key in TaskStatus]: string } = {
  [TaskStatus.COMPLETED]: "Concluída",
  [TaskStatus.IN_PROGRESS]: "Em Progresso",
  [TaskStatus.PENDING]: "Pendente",
};

const TaskCard = (task: Task) => {
  const dueDate = new Date(task.dueDate);
  const finishedAt = task.finishedAt ? new Date(task.finishedAt) : null;

  const back = (() => {
    switch (task.status) {
      case TaskStatus.COMPLETED:
        return "bg-green-100";
      case TaskStatus.IN_PROGRESS:
        return "bg-blue-100";
      default:
        return "bg-red-100";
    }
  })();

  return (
    <div
      className={`w-[15rem] h-[20rem] font-light grid rounded-xl justify-center items-center border ${back} border-gray-400 shadow-2xl p-4`}
    >
      <h2 className="border-b border-black text-center font-bold text-xl break-words break-all mb-2">
        {task.title.length > 20 ? task.title.slice(0, 20) + "..." : task.title}
      </h2>
      <p className="mb-2">Status: {statusMap[task.status]}</p>
      <p className="mb-2">Prazo: {dueDate.toLocaleDateString("pt-br")}</p>
      {task.status === TaskStatus.COMPLETED ? (
        <p className="mb-2">Finalizada: {finishedAt!.toDateString()}</p>
      ) : (
        <div />
      )}
      <Link
        href={`/tasks/${task.id}`}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Detalhes
      </Link>
    </div>
  );
};

export default TaskCard;
