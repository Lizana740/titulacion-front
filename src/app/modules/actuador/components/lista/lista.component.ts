import { Component, OnInit } from '@angular/core';
import { ActuadorService } from 'src/app/core/_services/actuador.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  display: boolean = false;
  lista: any;
  formulario!: FormGroup;
  id_estacion: number = -1;
  constructor(
    private actuadorService: ActuadorService,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formulario = this._formBuilder.group({
      descripcion: ['', Validators.required],
      tipo: ['', Validators.required],
      escala: ['', Validators.required],
      modelo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getActuadores();
  }

  getActuadores() {
    this.actuadorService.getActuadores().subscribe((res) => {
      this.lista = res.data;
    });
  }
  add(id_estacion: number) {
    this.display = true;
    this.id_estacion = id_estacion;
  }
  eliminarActuador(id_actuador: number) {
    Swal.fire({
      title: '¿Estas seguro de eliminar?',
      text: 'Los cambios seran permanentes',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminar',
    }).then(
      (result) => {
        if (result.isConfirmed) {
          this.actuadorService
            .deleteActuador(id_actuador)
            .subscribe((res: any) => {
              this.getActuadores();
            });
        }
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se ha podido eliminar el actuador!',
        });
      }
    );
  }
  agregarActuador() {
    var body = this.formulario.value;
    this.actuadorService
      .agregarActuador(this.id_estacion, body)
      .subscribe((res: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Actuador añadido con éxito!!',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getActuadores();
        this.display = false;
      });
  }

  editarActuador(id_actuador:number) {
    this.router.navigate([`app/actuador/${id_actuador}`])

  }
}
