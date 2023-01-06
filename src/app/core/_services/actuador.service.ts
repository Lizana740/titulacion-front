import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ActuadorService {

  private url: string = "/actuador/";
  constructor(private genericServices: GenericService) {
  }

  getActuadores(){
    return this.genericServices.getGeneric(this.url,"lista");
  }
  agregarActuador(id_estacion:number, body:any){
    return this.genericServices.postGeneric(this.url,id_estacion, body);
  }
  deleteActuador(id_actuador:number){
    return this.genericServices.deleteGeneric(this.url,id_actuador,"");
  }
  obtenerActuadorPorId(id_actuador:number){
    return this.genericServices.getGeneric(this.url, id_actuador);
  }
  actualizarActuador(id_actuador:number, body:any){
    return this.genericServices.postGeneric(this.url+"actualizar/", id_actuador, body)
  }


}
