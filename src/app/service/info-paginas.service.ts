import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfase/info-paginas.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginasService {
  info: InfoPagina = {};
  equipo: any =[]
  cargada=false;

  constructor(private http: HttpClient) {
    // console.log('Servicio de infoPagina listo');
    this.getInfo()
    this.getAbout()

  }
  private getInfo(){
    this.http
    .get('https://pagina-studio-84df5-default-rtdb.europe-west1.firebasedatabase.app/info.json')
    .subscribe((resp)=>{
        this.cargada=true;
        this.info=resp;
        console.log(resp);
      }
      )
  }
  private getAbout(){
    this.http
    .get('https://pagina-studio-84df5-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
    .subscribe((resp)=>{
        this.cargada=true;
        this.equipo=resp;
        console.log(resp);
      }
      )
  }
}
