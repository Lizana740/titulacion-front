import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
@Injectable({
  providedIn: 'root'
})
export class MedicionService {
  private url: string = "/medicion/";

  constructor(private genericServices: GenericService ) {
   }

   getMediciones(){
    return this.genericServices.getGeneric(this.url, 'lista');
  }
}
