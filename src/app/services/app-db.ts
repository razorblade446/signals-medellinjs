import Dexie, { Table } from 'dexie';
import { TodoCategory } from '../models/todo-category.model';
import { TodoItem } from '../models/todo-item.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDB extends Dexie {
  todoItems!: Table<TodoItem, number>;
  todoCategories!: Table<TodoCategory, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      todoCategories: '++id',
      todoItems: '++id'
    });

    // this.on('populate', () => this.populate());
  }

  async populate(): Promise<void> {
    const todoCategoryId = await this.todoCategories.add({ name: 'Work' });

    await this.todoItems.bulkAdd([
      {
        // todoCategoryId,
        title: 'Prepare slides for MedellinJs',
        description: 'Need to prepare slides to be presented to MedellinJs awesome attendants!',
        done: false
      },
      {
        // todoCategoryId,
        title: 'Prepare workshop app for MedellinJs',
        description: 'Prepare sample application for demonstrating the usage of Signals',
        done: false
      },
      {
        // todoCategoryId,
        title: 'Fix workshop app',
        description: 'Bugs are like Thanos, unavoidable!',
        done: false
      },
      {
        // todoCategoryId,
        title: 'Pizza and Gifts',
        description: 'Yeah right, nobody awaits 1 hour only for learning XD ',
        done: false
      }
    ]);
  }
}
