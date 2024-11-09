import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ToDoList } from '../list';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(
    private todoService: TodoService,
  ) {}

  lists: ToDoList[] = [];

  ngOnInit(): void {
      this.getAllLists();
  }

  getAllLists(): void {
    this.lists = this.todoService.getAllLists();
  }

  addList(listId: string, ListName: string): void {
    this.todoService.addList(listId, ListName);
  }

  deleteList(listName: string): void {
    this.todoService.deleteList(listName);
    this.getAllLists();
  }
}
