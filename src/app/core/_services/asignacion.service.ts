import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {
  private url: string = "/asignacion/";
  constructor(private genericServices: GenericService) { }
  obtenerAsignacionEstacion(id_estacion:number){
    return this.genericServices.getGeneric(this.url, id_estacion);
  }
  asignarTrabajadorEstacion(body:any){
    return this.genericServices.postGeneric(this.url,'', body)
  }
  eliminarAsignacion(body:any){
    return this.genericServices.postGeneric(this.url,'eliminar', body)
  }
}
