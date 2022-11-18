import { Injectable } from '@angular/core';

import { GenericService } from './generic.service';
@Injectable({
  providedIn: 'root'
})
export class SensorService {

  private url: string = "/sensor/";

  constructor(private genericServices: GenericService ) {
   }

   getSensores(){
    return this.genericServices.getGeneric(this.url, 'lista');
  }
  agregarSensores(body:any){
    return this.genericServices.postGeneric(this.url, "", body)
  }
  eliminarSensor(id_estacion:number){
    return this.genericServices.deleteGeneric(this.url,id_estacion,"");
  }
}
