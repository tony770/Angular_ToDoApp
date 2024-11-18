import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../list';
import { ListComponent } from '../list/list.component';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-container',
  standalone: true,
  imports: [ListComponent, CommonModule],
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
  isModalOpen = false;

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.folderId = params.get('folderId');
        this.getList();
      })
  }

  getList(): void {
    this.lists = [];
    if(this.folderId === 'starred') {
      this.lists = this.todoService.getAllStarredList();
    }
    else if(this.folderId){
      this.lists = this.todoService.getAllListsById(this.folderId);
    }
  }


  addList(ListName: string): void {
    if(this.folderId) {
      this.todoService.addList(this.folderId, ListName);
    }
    this.getList();
    this.closeModal();
  }

  deleteList(listName: string): void {
    this.todoService.deleteList(listName);
    this.getList();
  }

  toggleStarred(listName: string): void {
    this.todoService.toggleStarred(listName);
    this.getList();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal(event? : MouseEvent) {
    if(!event || event.target === event.currentTarget) {
      this.isModalOpen = false;
    }
  }
}
