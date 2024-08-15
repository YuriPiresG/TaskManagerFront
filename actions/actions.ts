"use server";

import { TaskStatus } from "@/app/enums/TaskStatus";
import { Task } from "@/app/page";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

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
