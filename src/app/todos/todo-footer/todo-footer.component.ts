import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { filtrosValidos, SET_FILTRO_ACTION } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public filtroActual: filtrosValidos = 'all';

  // Este arreglo es para comparar sus elementos con el filtroActual 
  public filtros: filtrosValidos[] = ['all', 'completed', 'pending'];

  public totalPendientes: number = 0; 

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {

    /*this.store.select('filtro').subscribe( filtro =>{
      
      // Estado inicial de los filtros : 'all'
      console.log(filtro);
      this.filtroActual = filtro; 

    });*/


    // Aquí nos suscribimos al store e igualamos el totalPendientes con un nuevo arreglo que tiene los todos no completados para saber cuantos elementos hay pendientes 
    this.store.subscribe( state =>{

      this.filtroActual = state.filtro; 

      this.totalPendientes = state.todos.filter( todo => !todo.completado ).length; 

    });

  }

  public cambiarFiltro( filtro: filtrosValidos ) {

    this.store.dispatch(SET_FILTRO_ACTION( { filtro: filtro } ));
  
  }

}
