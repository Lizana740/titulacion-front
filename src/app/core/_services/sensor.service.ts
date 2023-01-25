import { Injectable } from '@angular/core';

import { GenericService } from './generic.service';
@Injectable({
  providedIn: 'root',
})
export class SensorService {
  private url: string = '/sensor/';

  constructor(private genericServices: GenericService) {}

  getSensores() {
    return this.genericServices.getGeneric(this.url, 'lista');
  }
  agregarSensores(body: any) {
    return this.genericServices.postGeneric(this.url, '', body);
  }
  eliminarSensor(id_estacion: number) {
    return this.genericServices.deleteGeneric(this.url, id_estacion, '');
  }
  obtenerSensorPorId(id:any){
    return this.genericServices.getGeneric(this.url,id);
  }
  actualizarSensor(id_sensor:any,body:any){
    return this.genericServices.postGeneric(this.url,id_sensor, body)
  }
  configurarSensor(id_sensor:any,body:any){
    return this.genericServices.postGeneric(this.url+"config/",id_sensor, body)
  }
}
