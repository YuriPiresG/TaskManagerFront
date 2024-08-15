"use server";

import { TaskStatus } from "@/app/enums/TaskStatus";
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
