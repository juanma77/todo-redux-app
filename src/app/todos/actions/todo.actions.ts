import { createAction, props } from '@ngrx/store';

export const CREAR_TODO_ACTION = createAction(
    'CREAR_TODO_ACTION',
    props<{ texto: string }>()
);