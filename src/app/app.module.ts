import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';

// Servicios
import { DatosService } from './services/datos.service';
import { PokemonsService } from './services/pokemons.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    DatosService,
    PokemonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
