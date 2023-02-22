import { Component } from '@angular/core';
import {  InfoPaginasService } from './service/info-paginas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-angular-2023';
  constructor( public infoPaginaService: InfoPaginasService ) {
  }
}
