import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  @Input() task!: Task;
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();
}
