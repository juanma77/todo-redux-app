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

  public filtros: filtrosValidos[] = ['all', 'completed', 'pending'];

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {

    this.store.select('filtro').subscribe( filtro =>{
      
      // console.log(filtro);

      this.filtroActual = filtro; 

    });

  }

  public cambiarFiltro( filtro: filtrosValidos ) {

    // console.log(filtro);
    
    this.store.dispatch(SET_FILTRO_ACTION( { filtro: filtro } ))  

  }

}
