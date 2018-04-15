import { Component, Inject } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  public tiposPokemon = new Array();

  constructor( public _ps: PokemonsService ) { 
    this.tiposPokemon = ["Water", "Fire", "Grass", "Poison", "Ground", "Steel", "Rock", "Bug", "Normal", "Fighting", "Flying", "Electric", "Psychic", 
                          "Ice", "Dragon", "Ghost", "Dark", "Fairy"];
  }

  buscarColorTipo(tipo: string){
    let colores = ["blue", "red", "green", "purple", "brown", "gray", "darkgray", "darkgreen", "orange", "red", "purple", "yellow", "pink", "lightblue",
                  "purple", "purple", "brown", "pink"];
    let index = this.tiposPokemon.indexOf(tipo);
    return colores[index];
  }

}
