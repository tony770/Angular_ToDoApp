import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../list';
import { ListComponent } from '../list/list.component';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-container',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './list-container.component.html',
  styleUrl: './list-container.component.css'
})
export class ListContainerComponent implements OnInit {

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  lists: ToDoList[] = [];
  folderId: string | null = null;

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.folderId = params.get('folderId');
        this.getList();
      })
  }

  getList(): void {
    this.lists = [];
    if(this.folderId) {
      this.lists = this.todoService.getAllListsById(this.folderId);
    }
    
  }

  addList(listId: string, ListName: string): void {
    this.todoService.addList(listId, ListName);
    this.getList();
  }

  deleteList(listName: string): void {
    this.todoService.deleteList(listName);
    this.getList();
  }
}
