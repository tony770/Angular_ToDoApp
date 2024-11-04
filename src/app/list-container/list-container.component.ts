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

  ngOnInit(): void {
      this.getList();
  }

  getList(): void {

  }
}
