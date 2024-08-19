"use client";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { TaskStatus } from "../enums/TaskStatus";
import { createTask, updateTask } from "../../../actions/actions";
import { Task } from "../types/Task";
import { MdOutlineClose } from "react-icons/md";

type CreateUpdateFormProps = {
  id?: number;
  onClose: () => void;
  type: "create" | "update";
};

const CreateUpdateForm = ({ onClose, type, id }: CreateUpdateFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Task>();

  const onSubmit: SubmitHandler<Task> = (data) => {
    switch (type) {
      case "create":
        createTask(data);
        onClose();
      case "update":
        updateTask(id!, data);
        onClose();
    }
  };
  const status = useWatch({
    control,
    name: "status",
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <MdOutlineClose size={24} />
        </button>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div>
            <label htmlFor="title">Título</label>
            <input
              id="title"
              maxLength={55}
              {...register("title", { required: "Título é obrigatório" })}
              className="border p-2 rounded w-full"
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              {...register("description")}
              className="border h-32 resize-none p-2 rounded w-full"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="dueDate">Prazo</label>
            <input
              type="date"
              id="dueDate"
              {...register("dueDate", { required: "Prazo é obrigatório" })}
              className="border p-2 rounded w-full"
            />
            {errors.dueDate && (
              <p className="text-red-500">{errors.dueDate.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="status">Status</label>
            <select
              id="status"
              {...register("status", { required: "Status é obrigatório" })}
              className="border p-2 rounded w-full"
            >
              <option value={TaskStatus.PENDING}>Pendente</option>
              <option value={TaskStatus.IN_PROGRESS}>Em Progresso</option>
              <option value={TaskStatus.COMPLETED}>Concluída</option>
            </select>
            {errors.status && (
              <p className="text-red-500">{errors.status.message}</p>
            )}
          </div>

          {status === TaskStatus.COMPLETED && (
            <div>
              <label htmlFor="finishedDate">Data de Conclusão</label>
              <input
                type="date"
                id="finishedDate"
                {...register("finishedAt", {
                  required: "Data de conclusão é obrigatória",
                })}
                className="border p-2 rounded w-full"
              />
              {errors.finishedAt && (
                <p className="text-red-500">{errors.finishedAt.message}</p>
              )}
            </div>
          )}

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUpdateForm;
