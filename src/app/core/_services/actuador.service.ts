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


}
