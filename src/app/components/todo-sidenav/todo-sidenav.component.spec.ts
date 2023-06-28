import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSidenavComponent } from './todo-sidenav.component';

describe('TodoSidenavComponent', () => {
  let component: TodoSidenavComponent;
  let fixture: ComponentFixture<TodoSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoSidenavComponent]
    });
    fixture = TestBed.createComponent(TodoSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
