import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SensorService } from 'src/app/core/_services/sensor.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  formulario!: FormGroup;
  id: any;

  constructor(
    private sensorServices: SensorService,
    private _formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.formulario = this._formBuilder.group({
      modelo: ['', Validators.required],
      tipo: ['', Validators.required],
      escala: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id = parametros.get('id_sensor')!;
      this.sensorServices.obtenerSensorPorId(this.id).subscribe((res) => {
        var sensor = res.data;
        this.formulario = this._formBuilder.group({
          modelo: [sensor.modelo, Validators.required],
          tipo: [sensor.tipo, Validators.required],
          escala: [sensor.escala, Validators.required],
          descripcion: [sensor.descripcion, Validators.required],
        });
      });
    });
  }
  cancelar() {
    this.router.navigate(['/app/sensor/listar']);
  }

  add() {
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
        this.sensorServices
        .actualizarSensor(this.id, this.formulario.value)
        .subscribe((res) => {
          this.router.navigate(['/app/sensor/listar']);
        });
      }
    })

  }
}
