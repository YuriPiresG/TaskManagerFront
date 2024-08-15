import { TaskStatus } from "../enums/TaskStatus";

export type Task = {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  finishedAt: Date;
  status: TaskStatus;
};
