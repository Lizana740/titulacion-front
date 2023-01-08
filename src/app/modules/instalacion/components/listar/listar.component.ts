import { Component, OnInit } from '@angular/core';
import { EstacionService } from 'src/app/core/_services/estacion.service';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

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
    },(error:any)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pudieron obtener los datos de las estaciones!'
      })
      this.loading = false;
    })
  }

  delete(id:string){
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
        this.estacionServices.deleteEstacion(id).subscribe(res => {
          console.log("Se a eliminado una estacion");
          this.getEstaciones()

        },(error:any)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha podido eliminar la estación!'
          })
        })
      }
    })

  }
  add(){
    this.estacionServices.agregarEstacion(this.formulario.value).subscribe(item => {
      Swal.fire({
        icon: 'success',
        title: 'Estación añadida con éxito!!',
        showConfirmButton: false,
        timer: 1500
      })

      this.getEstaciones();
      this.display=false;
    })
  }
  asignar(id_estacion:number){
      this.router.navigate([`app/estacion/trabajadores/${id_estacion}`])
  }
}
