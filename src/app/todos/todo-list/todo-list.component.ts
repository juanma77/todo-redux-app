import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // Arreglo de todos
  public todos: Todo[] = [];  

  // Esto es para aplicar el filtro visualmente
  public filtroActual: filtrosValidos; 

  constructor( private store: Store<AppState> ) {

  }

  // Aquí recibimos el arreglo de todos a través de la suscripción y lo igualamos a nuestro arreglo vacío; cada vez que se origina un cambio así estamos suscritos y se actualizará nuestro arreglo vacío de todos con el que obtenemos en la suscripción 
  ngOnInit() {

    /* this.store.select('todos').subscribe( todos =>{
      this.todos = todos; 
    }); */ 

    this.store.subscribe( state =>{
      
      this.todos = state.todos; 
      this.filtroActual = state.filtro; 

      //console.log( this.todos );

    });

    // Otra forma de hacer lo de arriba 
    /*this.store.subscribe( { todos, filtro } =>{
      this.todos = todos; 
      this.filtroActual = filtro; 

      console.log( this.todos );

    }); */
    
  }

}
