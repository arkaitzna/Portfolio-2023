import { Component } from '@angular/core';
import { InfoPaginasService } from 'src/app/service/info-paginas.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
 constructor(public _servicio:InfoPaginasService) {

 }
}
