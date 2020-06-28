import { createAction, props } from '@ngrx/store';

// Para crear un todo 
export const CREAR_TODO_ACTION = createAction(
    'CREAR_TODO_ACTION',
    props<{ texto: string }>()
);

// Para cambiar el estado del todo de true a false según se haya completado o no
export const TOGGLE_TODO_ACTION = createAction(
    'TOGGLE_TODO_ACTION',
    props<{ id: number }>()
);

export const EDITAR_TODO_ACTION = createAction(
    'EDITAR_TODO_ACTION',
    props<{ id: number, texto: string }>()
);

export const BORRAR_TODO_ACTION = createAction(
    'BORRAR_TODO_ACTION',
    props<{ id: number }>()
);