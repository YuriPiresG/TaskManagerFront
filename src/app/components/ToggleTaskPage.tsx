"use client";
import React, { useState } from "react";
import CreateUpdateForm from "./CreateUpdateForm";

const ToggleTaskPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Tarefas</h1>
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        {showForm ? "Fechar Formulário" : "Abrir Formulário"}
      </button>
      {showForm && <CreateUpdateForm onClose={handleCloseForm} />}
    </div>
  );
};

export default ToggleTaskPage;
