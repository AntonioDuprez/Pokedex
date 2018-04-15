import { Component } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(public _ds: DatosService) {
    
  }

}
