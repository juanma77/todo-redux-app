import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'all' | 'completed' | 'pending';

export const SET_FILTRO_ACTION = createAction(
    'SET_FILTRO_ACTION',
    props <{ filtro: filtrosValidos }>()
)