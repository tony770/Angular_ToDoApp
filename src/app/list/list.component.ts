import { Component, Input} from '@angular/core';
import { Task } from '../task';
import { ListItemComponent } from '../list-item/list-item.component';
import { ToDoList } from '../list';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() list: ToDoList = {} as ToDoList;

  addTask(taskName: string) {
    const newTask: Task = {
      id: Math.random(),
      taskName,
      completed: false
    }
    this.list.tasks.push(newTask);
  }

  deleteTask(id: number) {
    this.list.tasks = this.list.tasks.filter(task => task.id !== id);
  }

  toggleTaskCompletion(id: number) {
    const task = this.list.tasks.find(task => task.id === id);
    if(task) task.completed = !task.completed;
  }
}
