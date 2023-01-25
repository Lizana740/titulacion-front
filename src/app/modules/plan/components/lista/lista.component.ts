import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADMINISTRADOR } from 'src/app/core/_files/cons';
import { AutentificacionService } from 'src/app/core/_services/autentificacion.service';
import { EstacionService } from 'src/app/core/_services/estacion.service';
import { PlanService } from 'src/app/core/_services/plan.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  estaciones: any = [];
  constructor(
    private estacionServices: EstacionService,
    private autentificacionServices: AutentificacionService,
    private router: Router,
    private planServices: PlanService
  ) {}

  ngOnInit(): void {
    this.getEstaciones();
  }

  getEstaciones() {
    let info: any = this.autentificacionServices.infoUser();
    let id_trabajador = info.trabajador.id_trabajador;
    let id_rol = parseInt(localStorage.getItem('id_rol'));
    if (id_rol != ADMINISTRADOR) {
      this.estacionServices
        .getEstacionesPorRol({ id_trabajador: id_trabajador, id_rol: id_rol })
        .subscribe((res: any) => {
          this.estaciones = res.data;
          for (var f of res.data) {
            let planes = [];
            for (var t of f.planes) {
              console.log('t', JSON.parse(t.configuracion));
              planes.push({
                id_plan: t.id_plan,
                configuracion: JSON.parse(t.configuracion),
                id_estacion: t.id_estacion,
              });
            }
            this.estaciones.push({
              actuadores: f.actuadores,
              sensores: f.sensores,
              ubicacion: f.ubicacion,
              id_estacion: f.id_estacion,
              nombre: f.nombre,
              planes: planes,
            });
          }
        });
    } else {
      this.estacionServices.getEstacion().subscribe((res: any) => {
        console.log('PLANES', res.data);

        for (var f of res.data) {
          let planes = [];
          for (var t of f.planes) {
            console.log('t', JSON.parse(t.configuracion));
            planes.push({
              id_plan: t.id_plan,
              configuracion: JSON.parse(t.configuracion),
              id_estacion: t.id_estacion,
            });
          }
          this.estaciones.push({
            actuadores: f.actuadores,
            sensores: f.sensores,
            ubicacion: f.ubicacion,
            id_estacion: f.id_estacion,
            nombre: f.nombre,
            planes: planes,
          });
        }
      });
    }
  }
  crearPlan(id_estacion: number) {
    this.router.navigate([`app/plan/agregar/${id_estacion}`]);
  }
  eliminar(id_plan: number) {

    Swal.fire({
      title: '¿Estas seguro de eliminar?',
      text: "Los cambios seran permanentes",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.planServices.eliminar(id_plan).subscribe((arg) => {
          this.ngOnInit();
        },(error:any)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha podido eliminar el plan!'
          })
        });
      }


    })

  }
}
