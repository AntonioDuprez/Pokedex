import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PokemonsService {
  public info = new Array();

  constructor( public http: Http ) { 
    this.instanciarDatos();
  }

  instanciarDatos(){
    this.http.get("https://pokedex-44774.firebaseio.com/.json").subscribe(data => {
      this.info = Array.of(data.json())[0];
      //console.log(this.info);
      
    });
  }

}
