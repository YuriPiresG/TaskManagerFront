"use client";

import { useRouter } from "next/navigation";
import {
  deleteAllTasks,
  deleteCompletedTasks,
  deleteTask,
} from "../../../actions/actions";

type ConfirmDeleteProps = {
  taskId?: number;
  type: string;
  title: string;
  onClose: () => void;
  onDelete: () => void;
};

const ConfirmDelete = ({
  taskId,
  type,
  title,
  onClose,
  onDelete,
}: ConfirmDeleteProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    console.log("Deleting task with ID:", taskId);
    try {
      switch (type) {
        case "task":
          await deleteTask(taskId!);
          break;
        case "all":
          await deleteAllTasks();
          break;
        case "completed":
          await deleteCompletedTasks();
          break;
        default:
          console.error("Invalid type:", type);
      }
      router.push("/tasks");
      onDelete();
      onClose();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">Tem certeza de que deseja continuar?</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
