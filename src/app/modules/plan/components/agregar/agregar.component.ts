import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EstacionService } from 'src/app/core/_services/estacion.service';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2'
import { PlanService } from 'src/app/core/_services/plan.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  periodo:number=10000;
  estacion:any=[];
  loading:boolean =false;
  actuadores:any=[]
  display:boolean = false;
  formulario:FormGroup;
  formulariocabecera:FormGroup;
  options =[{label:"MAYOR"}, {label:"MENOR"}]
  plan:any=[]
  id_actuador:number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private estacionServices: EstacionService,
    private _builderFrom: FormBuilder,
    private planServices:PlanService
  ) {
    this.formulario = this._builderFrom.group({
      time: ['', Validators.required],
      valor: ['', Validators.required],
      op: ['', Validators.required],
      sensor: ['', Validators.required],
    })
    this.formulariocabecera = this._builderFrom.group({
      descripcion: ['', Validators.required],
      periodo: ['', Validators.required]
    })

   }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      let id = parseInt(parametros.get('id_estacion')!);
      this.estacionServices.getEstacionId(id).subscribe((res:any)=>{
        this.estacion = res.data;
        console.log("ESTACION::", this.estacion)
      })
    });
  }

  configurarActuador(id_actuador:number){
    let actuador =  this.estacion.actuadores.filter((item)=> item.id_actuador == id_actuador)[0];
    console.log("ACTUADOR::", actuador);
    this.display = true;
    this.id_actuador= actuador.id_actuador;

  }
  guardar(){
    this.actuadores = this.actuadores.filter((item:any)=> item.id_actuador != this.id_actuador);
    this.actuadores.push({
      id_actuador: this.id_actuador,
      config: this.formulario.value
    })

    console.log("Actuadores:", this.actuadores)
    this.id_actuador=0;
    this.formulario.value.valor=''
    this.formulario.value.op=''
    this.formulario.value.time=''
    this.formulario.value.sensor=''
    this.display= false

  }
  cancel(){
    this.id_actuador=0;
    this.formulario.value.valor=''
    this.formulario.value.op=''
    this.formulario.value.time=''
    this.formulario.value.sensor=''
    this.display= false
  }

  enviar(){
      if(this.formulariocabecera.valid){
        let body = {
          id_estacion: this.estacion.id_estacion,
          cabecera:this.formulariocabecera.value,
          actuadores: this.actuadores
        }

        this.planServices.guardar(this.estacion.id_estacion, body).subscribe((res)=>{
          Swal.fire({
            icon: 'success',
            title: 'Se creo el plan con  éxito!!',
            showConfirmButton: false,
            timer: 1500
          })
        })
      }else {
        console.log("El formulario esta incompleto")
        Swal.fire({
          icon: 'error',
          title: 'Datos Incompletos',
          text: 'Debe rellenar los datos de periodo y la descripción!'
        })
      }




  }

}
