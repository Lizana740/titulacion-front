import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentificacionService } from '../_services/autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class RutaGuard implements CanActivate {
  constructor(private authService:AutentificacionService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let rolesAutorizados:any[] = route.data['only'];
      let inf:any = this.authService.infoUser();
      let rolesUsuario:any[] = inf.usuario.roles;
      let rolActual = localStorage.getItem('rol');
      if(rolesUsuario.some(item => item.nombre == rolActual)){
        if(rolesAutorizados.some(item =>item==rolActual)){
          return true;
        }
        console.log("No tiene los privilegios necesarios 1")
        return false;
      }else{
        console.log("No tiene los privilegios necesarios")
        return false;
      }
  }

}
