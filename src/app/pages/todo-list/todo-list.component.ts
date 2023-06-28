import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoItem } from '../../models';
import { MatDialog } from '@angular/material/dialog';
import { TodoAddComponent } from '../todo-add/todo-add.component';

@Component({
  selector: 'rb-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todoService = inject(TodoService);
  dialog = inject(MatDialog);

  isOpenedDialog: boolean = false;

  todoItems = this.todoService.todoItems;
  completion: number = 0;

  openAddDialog(): void {
    this.isOpenedDialog = true;
    const dialogRef = this.dialog.open(TodoAddComponent, { width: '400px' });

    dialogRef.afterClosed().subscribe(() => (this.isOpenedDialog = false));
  }

  markDone(done: boolean, todoItem: TodoItem): void {
    this.todoService.markDone(done, todoItem.id as string);
  }
}
