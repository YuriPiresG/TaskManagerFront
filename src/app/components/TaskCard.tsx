import Link from "next/link";
import { FaCheckCircle, FaHourglassHalf, FaTimesCircle } from "react-icons/fa";
import { TaskStatus } from "../enums/TaskStatus";
import { Task } from "../types/Task";

const statusMap: {
  [key in TaskStatus]: { label: string; icon: JSX.Element; color: string };
} = {
  [TaskStatus.COMPLETED]: {
    label: "Concluída",
    icon: <FaCheckCircle />,
    color: "text-green-500",
  },
  [TaskStatus.IN_PROGRESS]: {
    label: "Em Progresso",
    icon: <FaHourglassHalf />,
    color: "text-blue-500",
  },
  [TaskStatus.PENDING]: {
    label: "Pendente",
    icon: <FaTimesCircle />,
    color: "text-red-500",
  },
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
      className={`w-[15rem] h-[20rem] font-light grid rounded-xl justify-center items-center border ${back} border-gray-300 shadow-lg p-4 transition-transform transform hover:scale-105`}
    >
      <h2 className="border-b border-gray-300 text-center font-semibold text-lg break-words mb-4">
        {task.title.length > 20 ? task.title.slice(0, 20) + "..." : task.title}
      </h2>
      <div className="flex items-center mb-4">
        <span className={`mr-2 ${statusMap[task.status].color}`}>
          {statusMap[task.status].icon}
        </span>
        <p className="text-sm">{statusMap[task.status].label}</p>
      </div>
      <p className="text-sm mb-4">
        Prazo: {dueDate.toLocaleDateString("pt-br")}
      </p>

      <p className="text-sm mb-4">
        Finalizada: {finishedAt ? finishedAt.toLocaleDateString("pt-br") : "Não"}
      </p>

      <Link
        href={`/tasks/${task.id}`}
        className="bg-blue-500 text-white text-center py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        Detalhes
      </Link>
    </div>
  );
};

export default TaskCard;
