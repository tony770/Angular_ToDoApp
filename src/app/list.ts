import { Task } from "./task";

export interface ToDoList {
    id: string;
    name: string;
    tasks: Task[];
    starred: boolean
}