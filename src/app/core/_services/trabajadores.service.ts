import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class TrabajadoresService {
  private url: string = '//';
  constructor(private genericServices: GenericService) {}

  obtenerTrabajadoresAsignados(id_estaciom:number){


  }
}
