import { Component, EventEmitter, Input, output, Output} from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { ToDoList } from '../list';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() list: ToDoList = {} as ToDoList;
  @Output() delete = new EventEmitter<string>();
  
  constructor(private todoService: TodoService
  ) {}

  addTask(listName: string, taskName: string): void {
    this.todoService.addTask(listName, taskName);
  }

  toggleTaskCompletion(listName: string, taskId: number): void {
    this.todoService.toggleTaskCompletion(listName, taskId);
  }

  deleteTask(listName: string, taskId: number): void {
    this.todoService.deleteTask(listName, taskId);
  }

}
