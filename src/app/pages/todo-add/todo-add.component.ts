import { Component, inject, signal } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { TodoItem } from '../../models';
import { delay } from 'rxjs';

@Component({
  selector: 'rb-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {
  model: TodoItem = {
    title: '',
    description: '',
    done: false
  };

  isSaving = false;

  todoService = inject(TodoService);

  save(): void {
    this.isSaving = true;
    this.todoService.addTodo(this.model);
    this.isSaving = false;
  }
}
