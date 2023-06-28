import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../models';

@Component({
  selector: 'rb-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent {
  @Input() todoItem!: TodoItem;
  @Output() markDone = new EventEmitter<boolean>();
}
