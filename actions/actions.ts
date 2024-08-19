"use server";

import { TaskStatus } from "@/app/enums/TaskStatus";
import { Task } from "@/app/types/Task";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API = "http://localhost:8080/tasks";

export const getTasks = async (status?: TaskStatus) => {
  const _cookies = cookies();
  if (!status) {
    const response = await fetch(`${API}`, {
      next: { tags: ["tasks"] },
    });
    return response.json();
  }
  const response = await fetch(`${API}?status=${status}`);
  return response.json();
};

export const getTaskById = async (id: number) => {
  const response = await fetch(`${API}/${id}`);
  return response.json();
};

export const createTask = async (task: Task) => {
  const response = await fetch(`${API}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  revalidateTag("tasks");
  return response.json();
};
export const updateTask = async (id: number, task: Task) => {
  const response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  revalidateTag("tasks");
  return response.json();
};

export const deleteTask = async (id: number) => {
  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  revalidateTag("tasks");
  return response.ok;
};

export const deleteAllTasks = async () => {
  const response = await fetch(`${API}`, {
    method: "DELETE",
  });
  revalidateTag("tasks");
  return response.ok;
};

export const deleteCompletedTasks = async () => {
  const response = await fetch(`${API}/status/completed`, {
    method: "DELETE",
  });
  revalidateTag("tasks");
  return response.ok;
};
