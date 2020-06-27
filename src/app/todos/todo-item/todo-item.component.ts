import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

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

  constructor() {
   
  }

  // Creamos los todo-items
  ngOnInit() {


    this.checkCompletado = new FormControl( this.todo.completado );

    this.txtEditar = new FormControl( this.todo.texto, Validators.required );
   
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

  }

}
