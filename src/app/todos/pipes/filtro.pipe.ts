import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from 'src/app/filter/filter.actions';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'filtroTodo'
})

// El pipe recibe el arreglo de los todos; el filter regresa los elementos de un array que cumplen con la condición especificada en la función callback 
export class FiltroPipe implements PipeTransform {

  transform( todos: Todo[], filtro: filtrosValidos ): Todo[]{

    //console.log( todos );
    //console.log( filtro ); 

    switch( filtro ) {

      case 'completed': 
        return todos.filter( todo =>{
          todo.completado;
        });
 
     case 'pending': 
      return todos.filter( todo =>{
        !todo.completado
      });
      
     default: 
      return todos;  

    }
  }

}
