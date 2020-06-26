import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/reducer/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    StoreModule.forRoot({ todos: todoReducer })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
