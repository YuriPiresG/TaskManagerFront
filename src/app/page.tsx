import Image from "next/image";
import { getTasks } from "../../actions/actions";
import { TaskStatus } from "./enums/TaskStatus";

type Task = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  finishedAt: string;
  status: TaskStatus;
};

export default async function Home() {
  const tasks = await getTasks();
  return (
    <div>
      <h1>Lista de tasks</h1>
      <ul>
        {/* {tasks && tasks.length === 0 && <p>No tasks</p>} */}
        {tasks.map((task: Task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
