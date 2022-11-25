import { Component, OnInit } from '@angular/core';
import { ActuadorService } from 'src/app/core/_services/actuador.service';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  display:boolean=false;
  lista:any;
  formulario!:FormGroup
  id_estacion:number= -1
  constructor(private actuadorService:ActuadorService,  private _formBuilder: FormBuilder) {
    this.formulario =  this._formBuilder.group({
      descripcion: ['', Validators.required],
      tipo: ['', Validators.required],
      escala: ['', Validators.required],
      modelo: ['', Validators.required],

    })
   }

  ngOnInit(): void {
    this.getActuadores();
  }

  getActuadores(){
    this.actuadorService.getActuadores().subscribe((res) => {
        this.lista = res.data;
    })
  }
  add(id_estacion:number){
    this.display=true;
    this.id_estacion = id_estacion;
  }
  eliminarActuador(id_sensor:number){

  }
  agregarActuador(){

  }
}
