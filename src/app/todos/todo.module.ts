import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';



@NgModule({
  declarations: [AddTodoComponent, TodoFooterComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
