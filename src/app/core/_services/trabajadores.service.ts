import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class TrabajadoresService {
  private url: string = '/trabajador/';
  constructor(private genericServices: GenericService) {}

  obtenerTrabajadores(){
    return this.genericServices.getGeneric(this.url, "");
  }
}
