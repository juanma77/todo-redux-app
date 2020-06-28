import { createReducer, on } from '@ngrx/store';
import { SET_FILTRO_ACTION, filtrosValidos } from './filter.actions';

export const initialState: filtrosValidos = 'all'; 

// Aquí no hacemos mutaciones porque el filtro es un string, es decir, un dato primitivo 
const _filtroReducer = createReducer( initialState,
    on(SET_FILTRO_ACTION, (state, { filtro } ) => filtro)

);

export function filtroReducer(state, action) {
    return _filtroReducer(state, action); 
}