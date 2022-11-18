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
  deleteEstacion(id:string){
    return this.genericServices.deleteGeneric(this.url,id,"");
  }
  agregarEstacion(body:any){
    return this.genericServices.postGeneric(this.url, "", body);
  }
}
