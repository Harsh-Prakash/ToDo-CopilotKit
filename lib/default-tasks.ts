import { Task, TaskStatus } from "./tasks.types";

export const defaultTasks: Task[] = [
  {
    id: 1,
    title: "Join GDG on campus RCCIIT community",
    status: TaskStatus.done,
  },
  {
    id: 2,
    title: "Join GDG on campus RCCIIT Whatsapp Group",
    status: TaskStatus.done,
  },
  {
    id: 3,
    title: "Join GDG on campus RCCIIT's Events Regularly",
    status: TaskStatus.todo,
  },
  {
    id: 4,
    title: "Learn Different Technologies",
    status: TaskStatus.todo,
  },
  {
    id: 5,
    title: "Code them to Grow",
    status: TaskStatus.todo,
  },
];