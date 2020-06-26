import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

// Reactive forms 
import { ReactiveFormsModule } from '@angular/forms';

// En exports colocamos el componente que estará visible fuera de este módulo 
@NgModule({
  declarations: [AddTodoComponent, TodoFooterComponent, TodoItemComponent, TodoListComponent, TodoPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPageComponent
  ]
})
export class TodoModule { }
