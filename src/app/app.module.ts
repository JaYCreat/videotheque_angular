import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Angular CLI importe directement notre composant
import { ListeFilmsComponent } from './liste-films/liste-films.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AffichageListeFilmsComponent } from './affichage-liste-films/affichage-liste-films.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    // Avant de le déclarer obligatoirement comme module
    ListeFilmsComponent,
    AffichageListeFilmsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
