import { Injectable } from '@angular/core';
import { ToDoList } from './list';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private lists: ToDoList[] = [
    { id: 'work', name: 'Work', tasks: [] },
  ]

  constructor() { }

  getLists(): ToDoList[] {
    return this.lists;
  }

  getListById(listId: string): ToDoList | undefined {
    return this.lists.find(list => list.id === listId);
  }

  addList(name: string): void {
    const newList: ToDoList = {
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      tasks: []
    };
    this.lists.push(newList);
  }

  addTask(listId: string, taskTitle: string): void {
    const list = this.getListById(listId);
    if (list) {
      const newTask: Task = {
        id: Math.random() * 10,
        taskName: taskTitle,
        completed: false,
        starred: false,
      };
      list.tasks.push(newTask);
    }
  }

  toggleTaskCompletion(listId: string, taskId: number): void {
    const list = this.getListById(listId);
    const task = list?.tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }

  toggleStarred(listId: string, taskId: number): void {
    const list = this.getListById(listId);
    const task = list?.tasks.find(task => task.id === taskId);
    if (task) {
      task.starred = !task.starred;
    }
  }

  deleteTask(listId: string, taskId: number): void {
    const list = this.getListById(listId);
    if (list) {
      list.tasks = list.tasks.filter(task => task.id !== taskId);
    }
  }
}
