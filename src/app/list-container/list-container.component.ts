import { Component } from '@angular/core';
import { ToDoList } from '../list';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-list-container',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './list-container.component.html',
  styleUrl: './list-container.component.css'
})
export class ListContainerComponent {
  lists: ToDoList[] = [];

  addNewList(name: string) {
    const newList: ToDoList = {
      id: Math.random(),
      name: name,
      tasks: []
    }
    this.lists.push(newList);
  }
}
