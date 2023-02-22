import { Component } from '@angular/core';
import { InfoPaginasService } from 'src/app/service/info-paginas.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    year : number = new Date(). getFullYear();
    constructor( public _servicio:InfoPaginasService){};
}
