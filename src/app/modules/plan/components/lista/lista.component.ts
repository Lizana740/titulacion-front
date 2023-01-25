import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADMINISTRADOR } from 'src/app/core/_files/cons';
import { AutentificacionService } from 'src/app/core/_services/autentificacion.service';
import { EstacionService } from 'src/app/core/_services/estacion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  estaciones: any;
  constructor(
    private estacionServices: EstacionService,
    private autentificacionServices: AutentificacionService,
    private router:Router
  ) {


  }

  ngOnInit(): void {
    this.getEstaciones()
  }

  getEstaciones() {
    let info: any = this.autentificacionServices.infoUser();
    let id_trabajador = info.trabajador.id_trabajador;
    let id_rol = parseInt(localStorage.getItem('id_rol'));
    if (id_rol != ADMINISTRADOR) {
      this.estacionServices
        .getEstacionesPorRol({ id_trabajador: id_trabajador, id_rol: id_rol })
        .subscribe(
          (res: any) => {
            this.estaciones = res.data;
            console.log("PLANES",res.data)
          }
        );
    } else {
      this.estacionServices.getEstacion().subscribe((res: any) => {
        this.estaciones = res.data;
        console.log("PLANES",res.data)
      });
    }
  }
  crearPlan(id_estacion:number){

  this.router.navigate([`app/plan/agregar/${id_estacion}`])

  }
}
