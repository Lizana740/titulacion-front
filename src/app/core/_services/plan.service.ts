import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private url: string = "/plan/";
  constructor(private genericServices: GenericService ) {
  }

  guardar(id_estacion:number, body:any){
   return this.genericServices.postGeneric(this.url,id_estacion, body);
 }
  eliminar(id_plan){
    return this.genericServices.getGeneric(this.url,id_plan);
  }
}
