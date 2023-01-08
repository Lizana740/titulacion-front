import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActuadorService } from 'src/app/core/_services/actuador.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  formulario!: FormGroup;
  id: number;
  constructor(
    private actuadorServices: ActuadorService,
    private _formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.formulario = this._formBuilder.group({
      modelo: ['', Validators.required],
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id = parseInt(parametros.get('id_actuador')!);
      this.actuadorServices.obtenerActuadorPorId(this.id).subscribe((res) => {
        var sensor = res.data;
        this.formulario = this._formBuilder.group({
          modelo: [sensor.modelo, Validators.required],
          tipo: [sensor.tipo, Validators.required],
          descripcion: [sensor.descripcion, Validators.required],
        });
      });
    });
  }

  add(){
    Swal.fire({
      title: '¿Estas seguro de guardar los cambios?',
      text: "Podras volver a editarlos en esta misma sección",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Actualizar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.actuadorServices.actualizarActuador(this.id, this.formulario.value).subscribe((res:any)=>{
          this.router.navigate(['app/actuador/listar'])
          Swal.fire(
            'Éxito',
            'Tus datos han sido actualizados.',
            'success'
          )

        }, (err:any)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La actualización de tus datos no se a podido concretar!'
          })


        })
      }


    })

  }
  volver(){
    this.router.navigate(['/app/actuador/listar']);
  }
}
