import { Component, OnInit } from '@angular/core';
import { AsignacionService } from 'src/app/core/_services/asignacion.service';
import { AutentificacionService } from 'src/app/core/_services/autentificacion.service';
import { EstacionService } from 'src/app/core/_services/estacion.service';

@Component({
  selector: 'app-lista-asignada',
  templateUrl: './lista-asignada.component.html',
  styleUrls: ['./lista-asignada.component.css'],
})
export class ListaAsignadaComponent implements OnInit {
  misestaciones: any;
  loading:boolean = false
  constructor(
    private asignadoServices: AsignacionService,
    private autentificacionServices: AutentificacionService,
    private estacionServices: EstacionService,
  ) {}

  ngOnInit(): void {
    this.getEstaciones()
  }

  getEstaciones() {
    let info: any = this.autentificacionServices.infoUser();
    let id_trabajador = info.trabajador.id_trabajador;
    let id_rol = parseInt(localStorage.getItem('id_rol'));

    this.estacionServices
      .getEstacionesPorRol({ id_trabajador: id_trabajador, id_rol: id_rol })
      .subscribe(
        (res: any) => {
          this.misestaciones = res.data;

        }
      );
  }
}
