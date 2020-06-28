import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { TOGGLE_TODO_ACTION, EDITAR_TODO_ACTION, BORRAR_TODO_ACTION } from '../actions/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  // Inputs
  public checkCompletado: FormControl;
  public txtEditar: FormControl; 

  // Para editar
  public editando: boolean = false; 

  // Para obtener la referencia del html normal, es decir, el valor del elemento html que usamos en la vista 
  @ViewChild('inputHTML', { static:false }) txtInputHtml: ElementRef;

  constructor( private store: Store<AppState>) {
   
  }

  // Creamos los todo-items
  ngOnInit() {


    this.checkCompletado = new FormControl( this.todo.completado );

    this.txtEditar = new FormControl( this.todo.texto, Validators.required );
   
    // Nos suscribimos a los cambios que sufra el check y disparamos la acción TOGGLE_TODO_ACTION mandando el id del todo  
    this.checkCompletado.valueChanges.subscribe( actualValor =>{
      this.store.dispatch(TOGGLE_TODO_ACTION({ id: this.todo.id })); 
    }); 

  }

  // Tenemos que hacer el setTimeout para que haga el trabajo de un pequeño fix para que el focus se ejectute de forma adecuada
  public editarTodo() {

    this.editando = true;

    setTimeout(() => {
      this.txtInputHtml.nativeElement.focus();
    }, 1000000000000000);

  }

  // Acabamos la edición y la variable editando la cambiamos a false 
  public terminarEdicion() {

    this.editando = false; 

    // Verificamos que el campo tenga algún valor, de ser así, entonces retornamos; y si no se modificó el valor hacemos lo mismo 
    if( this.txtEditar.invalid ){
      return; 
    }  

    if( this.txtEditar.value === this.todo.texto ){
      return; 
    }

    // La acción se dispara sólo si cambia el valor del check
    this.store.dispatch(EDITAR_TODO_ACTION( {id: this.todo.id, texto: this.txtEditar.value}));

  }

  public borrarTodo() {

    this.store.dispatch( BORRAR_TODO_ACTION( { id: this.todo.id } ) );

  }

}
