import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DatosService {
  public info = [];

  constructor( public http: Http ) { 
    this.instanciarDatos();
  }

  instanciarDatos(){
    this.http.get("assets/data/config.json").subscribe(data => {
      // console.log(data.json());
      this.info = data.json();
    });
  }
}
