import { Component } from '@angular/core';
import { InfoPaginasService } from 'src/app/service/info-paginas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor( public _servicio:InfoPaginasService){}
}
