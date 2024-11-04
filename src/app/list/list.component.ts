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
  
}
