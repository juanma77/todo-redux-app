import { Todo } from '../models/todo.model';
import { createReducer, on } from '@ngrx/store';
import { CREAR_TODO_ACTION } from '../actions/todo.actions';


// Nuestro estadoInicial es un arreglo de elementos del modelo Todo
export const estadoInicial: Todo[] = [];

// Aquí no debemos hacer un push directamente al state; regresamos el nuevo arreglo usando desestructuración y mandamos el nuevo state, es decir, extraemos cada uno de los items y los regresamos de manera independiente. Los tres puntos (operador spread) es para regresar un nuevo arreglo y para extraer cada uno de los todos que tenga ese nuevo arreglo de manera independiente. También creamos una nueva instancia del todo, y mandamos el texto que la persona escribe en pantalla 
const _todoReducer = createReducer( estadoInicial,
    on(CREAR_TODO_ACTION, ( state, { texto } ) => [...state, new Todo( texto ) ] )
);

export function todoReducer(state, action) {
    return _todoReducer( state, action );
}