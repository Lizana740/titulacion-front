import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class EstacionService {
  private url: string = "/estacion/";
  constructor(private genericServices: GenericService) {
  }

  getEstacion(){
    return this.genericServices.getGeneric(this.url, 'lista');
  }
  getEstacionId(id:number){
    return this.genericServices.getGeneric(this.url, id);
  }
  deleteEstacion(id:string){
    return this.genericServices.deleteGeneric(this.url,id,"");
  }
  agregarEstacion(body:any){
    return this.genericServices.postGeneric(this.url, "", body);
  }
  getEstacionesPorRol(body:any){
    return this.genericServices.postGeneric(this.url, "asignadas", body);
  }
  getEstacionesPorIdRol(body:any){
    return this.genericServices.postGeneric(this.url, "asignadasIdRol", body);
  }

}
