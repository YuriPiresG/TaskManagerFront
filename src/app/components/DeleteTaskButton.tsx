"use client";
import React, { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";

type DeleteTaskButtonProps = {
  type: "task" | "all" | "completed";
  taskId?: number;
};

const DeleteTaskButton = ({ taskId, type }: DeleteTaskButtonProps) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleOpenConfirmDelete = () => {
    setShowConfirmDelete(true);
  };

  const handleCloseConfirmDelete = () => {
    setShowConfirmDelete(false);
  };

  const handleTaskDeleted = () => {
    handleCloseConfirmDelete();
  };

  const getButtonText = () => {
    switch (type) {
      case "task":
        return "Tarefa";
      case "all":
        return "Todas as tarefas";
      case "completed":
        return "tarefas completadas";
      default:
        return "";
    }
  };

  return (
    <div>
      <button
        onClick={handleOpenConfirmDelete}
        className="bg-red-500 text-white py-2 px-4 w-56 rounded hover:bg-red-600"
      >
        Excluir {getButtonText()}
      </button>
      {showConfirmDelete && (
        <ConfirmDelete
          title={`Excluir ${getButtonText()}`}
          type={type}
          taskId={taskId}
          onClose={handleCloseConfirmDelete}
          onDelete={handleTaskDeleted}
        />
      )}
    </div>
  );
};

export default DeleteTaskButton;
