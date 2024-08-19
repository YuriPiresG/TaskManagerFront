"use client";
import React, { useState } from "react";
import CreateUpdateForm from "./CreateUpdateForm";
import { FaPlus } from "react-icons/fa"; // Importing the Plus icon from react-icons

type CreateOrUpdateButtonProps = {
  id?: number;
  type: "create" | "update";
};

export const CreateOrUpdateButton = ({
  type,
  id,
}: CreateOrUpdateButtonProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleButtonClick = (): void => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleCloseForm = (): void => {
    setShowForm(false);
  };

  return (
    <div className="container">
      <button
        onClick={handleButtonClick}
        className={`${
          type == "create" ? "bg-blue-500" : "bg-yellow-500"
        } text-white p-3 rounded-md w-40 flex items-center hover:${
          type == "create" ? "bg-blue-600" : "bg-yellow-600"
        }`}
      >
        <FaPlus className="h-5 w-5 mr-2" />
        {type === "create" ? "Criar" : "Atualizar"}
      </button>
      {showForm && (
        <div className="flex justify-center">
          <CreateUpdateForm id={id} type={type} onClose={handleCloseForm} />
        </div>
      )}
    </div>
  );
};
