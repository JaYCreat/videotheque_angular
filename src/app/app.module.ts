import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Angular CLI importe directement notre composant
import { ListeFilmsComponent } from './liste-films/liste-films.component';

@NgModule({
  declarations: [
    AppComponent,
    // Avant de le déclarer obligatoirement comme module
    ListeFilmsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
