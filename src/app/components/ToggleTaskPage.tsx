"use client";
import React, { useState } from "react";
import CreateUpdateForm from "./CreateUpdateForm";
import { FaPlus } from "react-icons/fa"; // Importing the Plus icon from react-icons

const ToggleTaskPage: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleButtonClick = (): void => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleCloseForm = (): void => {
    setShowForm(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Tarefas</h1>
      <div className="flex justify-center mb-6">
        <AddButton onClick={handleButtonClick} />
      </div>
      {showForm && (
        <div className="flex justify-center">
          <CreateUpdateForm onClose={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

interface AddButtonProps {
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 text-white p-3 rounded-full flex items-center transition-transform transform hover:scale-105"
  >
    <FaPlus className="h-5 w-5 mr-2" />
    Adicionar
  </button>
);

export default ToggleTaskPage;
