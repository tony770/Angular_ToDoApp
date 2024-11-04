import { Injectable } from '@angular/core';
import { ToDoList } from './list';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private lists: ToDoList[] = [
    { id: 'personal', name: 'groceries', tasks: [
      { id: 1, taskName: 'egg', completed: false },
      { id: 2, taskName: 'milk', completed: false },
      { id: 3, taskName: 'bread', completed: false },
    ], starred: false},
    { id: 'personal', name: 'morning', tasks: [], starred: false},
    { id: 'work', name: 'morning shift', tasks: [], starred: false}
  ]

  constructor() { }

  getAllLists(): ToDoList[] {
    return this.lists;
  }

  getListByName(listName: string): ToDoList | undefined {
    return this.lists.find(list => list.name === listName);
  }

  addList(id: string, name: string): void {
    const newList: ToDoList = {
      id: id,
      name: name,
      tasks: [],
      starred: false
    };
    this.lists.push(newList);
  }

  addTask(listName: string, taskName: string): void {
    const list = this.getListByName(listName);
    if(list) {
      const newTask: Task = {
        id: list.tasks.length + 1,
        taskName: taskName,
        completed: false
      };
      list.tasks.push(newTask);
    }
    else {
      console.log(`list with name ${listName} not found`);
    }
  }

  toggleTaskCompletion(listName: string, taskId: number): void {
    const list = this.getListByName(listName);
    const task = list?.tasks.find(task => task.id === taskId);
    if(task) {
      task.completed = !task.completed;
    }
  }

  toggleStarred(listName: string): void {
    const list = this.getListByName(listName);
    if(list) {
      list.starred = !list.starred;
    }
  }

  deleteTask(listName: string, taskId: number): void {
    const list = this.getListByName(listName);
    if(list) {
      list.tasks = list.tasks.filter(task => task.id !== taskId);
    }
  }

  deleteList(listName: string): void {
    this.lists = this.lists.filter(list => list.name !== listName);
  }
}
