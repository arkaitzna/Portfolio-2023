import { Component } from '@angular/core';
import { InfoPaginasService } from 'src/app/service/info-paginas.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public _servicio:InfoPaginasService) {
    console.log('c', _servicio);

  }

}
