import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { SharedModule } from './modules/shared.module';
import { TodoGridComponent } from './components/todo-grid/todo-grid.component';
import { TodoSidenavComponent } from './components/todo-sidenav/todo-sidenav.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoCardComponent,
    TodoGridComponent,
    TodoSidenavComponent,
    TodoListComponent,
    TodoAddComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
