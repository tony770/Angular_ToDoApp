import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ToDoList } from '../list';
import { ListComponent } from '../list/list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListComponent, CommonModule],
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
  
  deleteList(listName: string): void {
    this.todoService.deleteList(listName);
    this.getAllLists();
  }

  toggleStarred(listName: string): void {
    this.todoService.toggleStarred(listName);
    this.getAllLists();
  }
}
