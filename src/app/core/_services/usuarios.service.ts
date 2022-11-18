import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url: string = "/usuario/";
  constructor(private genericServices: GenericService) {
  }

  getUsuarios(){
    return this.genericServices.getGeneric(this.url, 'lista');
  }
  deleteUsuario(id:string){
    return this.genericServices.deleteGeneric(this.url,id,"");
  }
  addUsuario(body:any){
    return this.genericServices.postGeneric(this.url, "", body);
  }
}
