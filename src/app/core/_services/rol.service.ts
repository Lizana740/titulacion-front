import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private url: string = "/rol/";

  constructor(private genericServices: GenericService ) {
  }

  getRoles(){
    return this.genericServices.getGeneric(this.url, "lista");
  }
}
