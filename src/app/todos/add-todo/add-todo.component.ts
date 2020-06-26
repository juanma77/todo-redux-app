import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { CREAR_TODO_ACTION } from '../actions/todo.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  txtInput: FormControl; 

  constructor( private store: Store<AppState> ) {

    this.txtInput = new FormControl(' ', Validators.required);


  }

  ngOnInit() {
  }

  public agregarTodo() {

    if( this.txtInput.invalid ) {
      return;
    }

    this.store.dispatch( CREAR_TODO_ACTION( { texto: this.txtInput.value } ) );  

    this.txtInput.reset();


  }

}
