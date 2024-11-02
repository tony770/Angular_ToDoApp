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
  testList: ToDoList = {
    id: 'test',
    name: 'test',
    tasks: [
      {
        id: 1,
        taskName: 'egg',
        completed: false,
        starred: false
      },
      {
        id: 2,
        taskName: 'milk',
        completed: false,
        starred: false
      },
      {
        id: 3,
        taskName: 'bread',
        completed: false,
        starred: false
      },
      {
        id: 4,
        taskName: 'go to the pharmacy and print out paper',
        completed: false,
        starred: false
      }
    ]
  };

  addNewList(name: string) {
    const newList: ToDoList = {
      id: name,
      name: name,
      tasks: []
    }
    this.lists.push(newList);
  }
}
