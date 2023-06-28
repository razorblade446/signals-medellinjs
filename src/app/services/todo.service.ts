import { inject, Injectable } from '@angular/core';
import { defer, from, Observable, of } from 'rxjs';
import { liveQuery } from 'dexie';
import { TodoItem } from '../models';
import * as uuid from 'uuid';

@Injectable({ providedIn: 'root' })
export class TodoService {
  todoItems: TodoItem[] = [];

  constructor() {
    this.todoItems = this.getItemsLocalStorage();
  }

  addTodo(todoItem: TodoItem): string {
    const id = uuid.v4();
    this.todoItems = [{ id, ...todoItem }, ...this.todoItems];
    this.updateTodoItemsLocalStorage();
    return id;
  }

  deleteTodo(todoItemId: string): void {
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== todoItemId);
    this.updateTodoItemsLocalStorage();
  }

  markDone(done: boolean, todoItemId: string): void {
    this.todoItems = this.todoItems.map(todoItem => ({
      ...todoItem,
      done: todoItem.id === todoItemId ? done : todoItem.done
    }));

    this.updateTodoItemsLocalStorage();
  }

  // Keep localstorage updated to avoid reentering list of items.
  getItemsLocalStorage(): TodoItem[] {
    const todoItemsStr = localStorage.getItem('todoItems');

    if (todoItemsStr) {
      return JSON.parse(todoItemsStr);
    }

    return [];
  }

  updateTodoItemsLocalStorage(): void {
    const todoItemsStr = JSON.stringify(this.todoItems);

    localStorage.setItem('todoItems', todoItemsStr);
  }
}
