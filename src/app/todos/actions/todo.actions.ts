import { createAction, props } from '@ngrx/store';

export const CREAR_TODO_ACTION = createAction(
    'CREAR_TODO_ACTION',
    props<{ texto: string }>()
);

// Para cambiar el estado del todo de true a false según se haya completado o no
export const TOGGLE_TODO_ACTION = createAction(
    'TOGGLE_TODO_ACTION',
    props<{ id: number }>()
);