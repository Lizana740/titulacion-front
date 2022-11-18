import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private url: string = "/login";
  constructor(private genericServices: GenericService) {
  }

  login(body:any){
    return this.genericServices.postGeneric(this.url,"",body);
  }

  infoUser(){
    let token = localStorage.getItem("token");
    if(token){
      return jwtDecode(token);
    }
  }


}
