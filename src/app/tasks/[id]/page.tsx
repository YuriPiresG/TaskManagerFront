import React from "react";
import { getTaskById } from "../../../../actions/actions";
import { Task } from "../../types/Task";
import { TaskStatus } from "@/app/enums/TaskStatus";
import Link from "next/link";
import DeleteTaskButton from "@/app/components/DeleteTaskButton";

type Props = {
  params: {
    id: number;
  };
};

const TaskDetails = async ({ params }: Props) => {
  const task: Task = await getTaskById(params.id);
  const dueDate = new Date(task.dueDate).toLocaleDateString("pt-br");
  const finishedAt = task.finishedAt
    ? new Date(task.finishedAt).toLocaleDateString("pt-br")
    : null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Id:</span> {task.id}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Descrição:</span> {task.description}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Prazo de validade:</span> {dueDate}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Status:</span> {task.status}
        </p>
        {task.status === "COMPLETED" && (
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Finalizado:</span>
            {task.status === TaskStatus.COMPLETED
              ? finishedAt
              : "ainda não finalizado"}
          </p>
        )}
        <div className="flex gap-2">
          <Link
            href="/tasks"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Voltar
          </Link>
          <DeleteTaskButton type={"task"} taskId={task.id} />
          <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
            Atualizar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
