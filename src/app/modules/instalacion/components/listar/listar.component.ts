import { Component, OnInit } from '@angular/core';
import { EstacionService } from 'src/app/core/_services/estacion.service';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  formulario!: FormGroup;
  display:boolean = false
  lista:any
  estaciones:any[] =[];
  loading: boolean = true;
  displayAsignar: boolean  = false;
  constructor(private estacionServices: EstacionService,
        private _formBuilder: FormBuilder,
        private router:Router) { }

  ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      nombre: ['', Validators.required],
      ubicacion: ['', Validators.required],

    })
    this.getEstaciones();
  }

  getEstaciones(){
    this.estacionServices.getEstacion().subscribe(res => {
      this.estaciones = res.data;
      this.loading = false;
    })
  }

  delete(id:string){
    this.estacionServices.deleteEstacion(id).subscribe(res => {
      console.log("Se a eliminado una estacion");
      this.getEstaciones()
    })
  }
  add(){
    this.estacionServices.agregarEstacion(this.formulario.value).subscribe(item => {
      this.getEstaciones();
      this.display=false;
    })
  }
  asignar(id_estacion:number){
      this.router.navigate(['app/estacion/trabajadores'])
  }
}
