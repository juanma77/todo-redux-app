import { Todo } from '../models/todo.model';
import { createReducer, on } from '@ngrx/store';
import { CREAR_TODO_ACTION, TOGGLE_TODO_ACTION, EDITAR_TODO_ACTION, BORRAR_TODO_ACTION } from '../actions/todo.actions';


// Nuestro estadoInicial es un arreglo de elementos del modelo Todo
export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar el escudo de Capitán América')
];

// Aquí no debemos hacer un push directamente al state; regresamos el nuevo arreglo usando desestructuración y mandamos el nuevo state, es decir, extraemos cada uno de los items y los regresamos de manera independiente. Los tres puntos (operador spread) es para regresar un nuevo arreglo y para extraer cada uno de los todos que tenga ese nuevo arreglo de manera independiente. También creamos una nueva instancia del todo, y mandamos el texto que la persona escribe en pantalla. Siempre debemos de regresar el state en el reducer. El map es parecido al forEach barre cada elemento, los transforma y regresa un nuevo arreglo. Mapeamos el state para regresar un nuevo array con los todos, pero ahora checamos si el todo.id es igual al id que mandamos en la TOGGLE_TODO_ACTION; de ser así regresamos los todos tal y como están pero la propiedad completado la regresamos con su inverso (de true a false y/o viceversa), en caso contrario regresamos el todo tal y como estaba. Para la acción de borrar, el filter lo que hace es que crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada; decimos que regresamos todos los todos cuyo id es diferente al id que estamos recibiendo como argumento  
const _todoReducer = createReducer( estadoInicial,
    on(CREAR_TODO_ACTION, ( state, { texto } ) => [...state, new Todo( texto ) ] ),
    on(TOGGLE_TODO_ACTION, ( state, { id } ) => {
        return state.map( todo =>{
            
            if( todo.id === id ){
                return {
                    ...todo,
                    completado: !todo.completado
                }
            }else {
                return todo; 
            }
            
        }); 
    }),
    on(EDITAR_TODO_ACTION, ( state, { id, texto } ) => {
        return state.map( todo =>{
            
            if( todo.id === id ){
                return {
                    ...todo,
                    texto: texto
                }
            }else {
                return todo; 
            }
            
        }); 
    }),
    on(BORRAR_TODO_ACTION, ( state, { id } ) => state.filter( todo => todo.id !== id ))

);

export function todoReducer(state, action) {
    return _todoReducer( state, action );
}