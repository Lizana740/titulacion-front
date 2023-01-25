import { Component, OnInit } from '@angular/core';
import { SensorService } from 'src/app/core/_services/sensor.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TIPO_SENSOR, MODELO_SENSOR, MANTENEDOR } from 'src/app/core/_files/cons';
import Swal from 'sweetalert2';
import { AutentificacionService } from 'src/app/core/_services/autentificacion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  lista: any =[];
  formulario!: FormGroup;
  formularioCongig!: FormGroup;
  id_estacion!: number;
  display = false;
  tipos:any =TIPO_SENSOR;
  modelos: any ;
  displayConfig :boolean = false
  id_sensor:number;
  rol:any= localStorage.getItem('rol');
  puertos =[
    {p:'D1' ,tipo: "DIGITAL"},
    {p:'D2',tipo: "DIGITAL"},
    {p:'D3',tipo: "DIGITAL"},
    {p:'D4',tipo: "DIGITAL"},
    {p:'D5',tipo: "DIGITAL"},
    {p:'D6',tipo: "DIGITAL"},
    {p:'D7',tipo: "DIGITAL"},
    {p:'D8',tipo: "DIGITAL"},
    {p:'D9',tipo: "DIGITAL"},
    {p:'A0',tipo: "ANALOGICO"},

  ]
  constructor(
    private sensoresService: SensorService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private autentificacionServices: AutentificacionService,
  ) {
    this.formulario = this._formBuilder.group({
      descripcion: ['', Validators.required],
      tipo: ['', Validators.required],
      escala: ['', Validators.required],
      modelo: ['', Validators.required],
    });
    this.formularioCongig = this._formBuilder.group({
      puerto: ['', Validators.required],
      map: ['', Validators.required],
      voltaje: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getSensores();
  }
  getSensores() {
    this.sensoresService.getSensores().subscribe((res) => {

      let info:any = this.autentificacionServices.infoUser();
      let id_trabajador = info.trabajador.id_trabajador;
      if(this.rol=="MANTENEDOR"){
        for(var a of res.data){

          for(var b of a.trabajadores){
            if(b.id_trabajador == id_trabajador && b.Trabaja.id_rol == MANTENEDOR ){
              this.lista.push(a);
            }
          }
        }
      }else{
        this.lista = res.data;
      }
      /*
      console.log('Lista', this.lista); */
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
      this.getSensores();
      Swal.fire({
        icon: 'success',
        title: 'Se creo el añadio el sensor con  éxito!!',
        showConfirmButton: false,
        timer: 1500
      })

    });
    this.display = false;
  }
  editar(id: any) {
    this.router.navigate(['/app/sensor/editar/'+id]);
  }

  eliminarSensor(id_sensor: number) {
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
      this.sensoresService.eliminarSensor(id_sensor).subscribe((item) => {
        this.getSensores();
      },(error:any)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se ha podido eliminar el sensor!'
        })
      });
    })

  }

  changeTipoSensor(s:any){

    this.modelos = MODELO_SENSOR.filter((item)=> item.tipo==  this.formulario.value.tipo);
  }

  configurar(id_sensor){
    this.displayConfig = true;
    this.id_sensor = id_sensor
  }
  configurarSensor(){
    if(this.formularioCongig.valid){
      this.sensoresService.configurarSensor(this.id_sensor, this.formularioCongig.value).subscribe((res)=>{
        this.getSensores();
        this.displayConfig = false;
        Swal.fire({
          icon: 'success',
          title: 'Sensor configurado con éxito!!',
          showConfirmButton: false,
          timer: 1500
        })
      })

    }

  }
}
