import { Component, OnInit } from '@angular/core';
import { SensorService } from 'src/app/core/_services/sensor.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  lista: any;
  formulario!: FormGroup;
  id_estacion!: number;
  display = false;
  constructor(
    private sensoresService: SensorService,
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
    this.getSensores();
  }
  getSensores() {
    this.sensoresService.getSensores().subscribe((res) => {
      this.lista = res.data;
      console.log('Lista', this.lista);
    });
  }
  add(id: number) {
    this.display = true;
    this.id_estacion = id;
  }
  agregarSensor() {
    let body = {
      descripcion: this.formulario.value.descripcion,
      tipo: this.formulario.value.tipo,
      modelo: this.formulario.value.modelo,
      escala: this.formulario.value.escala,
      configuracion: null,
      id_estacion: this.id_estacion,
    };
    this.sensoresService.agregarSensores(body).subscribe((res) => {
      console.log('Se agrego el sensor exitosamente');
      this.getSensores();
    });
    this.display = false;
  }
  editar(id: any) {
    this.router.navigate(['/app/sensor/editar/'+id]);
  }

  eliminarSensor(id_sensor: number) {
    this.sensoresService.eliminarSensor(id_sensor).subscribe((item) => {
      this.getSensores();
    });
  }
}
