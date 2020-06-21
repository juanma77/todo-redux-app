import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [AddTodoComponent, TodoFooterComponent, TodoItemComponent, TodoListComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
