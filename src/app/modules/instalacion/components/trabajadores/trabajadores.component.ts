import { Component, OnInit } from '@angular/core';
import { AsignacionService } from 'src/app/core/_services/asignacion.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NotFoundError, Observable } from 'rxjs';
import { TrabajadoresService } from 'src/app/core/_services/trabajadores.service';
import { map, startWith } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { MANTENEDOR, USARIO_PLANTA } from 'src/app/core/_files/cons';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css'],
})
export class TrabajadoresComponent implements OnInit {
  lista: any;
  usuarios_planta: any;
  mantenedores: any;
  display: boolean = false;
  id_estacion: number;
  formulario!: FormGroup
  trabajadores: any;
  estado = new FormControl('');
  filteredStates: Observable<any[]>;
  body:any = {
    id_estacion: -1,
    id_trabajador:-1,
    id_rol:-1
  };

  trabajador:number;
  loading:boolean= false;

  roles:any;
  roldisplay:boolean = false;
  constructor(
    private trabajadorServices: TrabajadoresService,
    private asignacionesServices: AsignacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _builderFrom: FormBuilder,
    private messageService: MessageService
  ) {
    this.formulario = this._builderFrom.group({
      trabajador: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id_estacion = parseInt(parametros.get('id_estacion')!);
      this.getAsignaciones();
      this.getTrabajadores();
      this.body.id_estacion= this.id_estacion;
      this.loading = true;
    });
    this.filteredStates = this.estado.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.trabajadores.slice())),
    );

  }
  private _filterStates(value: string){
    const filterValue = value.toLowerCase();
    let arr = this.trabajadores.filter(state => state.nombre.toLowerCase().includes(filterValue));
    return arr;
  }

  getAsignaciones() {
    this.asignacionesServices
      .obtenerAsignacionEstacion(this.id_estacion)
      .subscribe((res: any) => {
        this.mantenedores = res.data.mantenedores;
        this.usuarios_planta = res.data.usuario_planta;
      });
  }
  click(id_trabajador:number){
      console.log(id_trabajador)
      for(var obj of this.trabajadores){
        var aux = obj.trabajador;
        if(aux !=null && obj.trabajador.id_trabajador == id_trabajador){
          this.roles = obj.roles;
          this.body.id_trabajador= id_trabajador;
          return;

      }}
      this.roles = [];

  }
  enviar(){
    if(this.body.id_estacion !=-1 &&this.body.id_rol!=-1 && this.body.id_estacion !=-1){
      this.asignacionesServices.asignarTrabajadorEstacion(this.body).subscribe((res:any)=>{
        this.getAsignaciones();
        this.getTrabajadores();
        this.display= false;
        Swal.fire({
          icon: 'success',
          title: 'Trabajador asignado con éxito!!',
          showConfirmButton: false,
          timer: 1500
        })

      })
    }else{


    }
/*     this.asignacionesServices.asignarTrabajadorEstacion().subscribe((res:any)=>{

    }) */
  }
  getTrabajadores() {
    this.trabajadorServices.obtenerTrabajadores().subscribe((res: any) => {
      this.trabajadores = res.data;
      console.log(this.trabajadores);
    });
  }

  asignar() {
    this.display = true;
  }
  cancel(){
    this.display=false;
    this.body={
      id_estacion: -1,
      id_trabajador:-1,
      id_rol:-1
    };
    this.getAsignaciones();
    this.getTrabajadores();

  }
  eliminarPlanta(id_trabajador:number){
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
        let b: any ={
          id_estacion: this.id_estacion,
          id_rol: USARIO_PLANTA,
          id_trabajador: id_trabajador
        }
        this.asignacionesServices.eliminarAsignacion(b).subscribe((res)=>{
          this.getAsignaciones();
          this.getTrabajadores();
        },(error:any)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha podido eliminar al usuario de planta!'
          })
        })
      }

    })

  }

  eliminarMantenedor(id_trabajador:number){
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
        let b: any ={
          id_estacion: this.id_estacion,
          id_rol: MANTENEDOR,
          id_trabajador: id_trabajador
        }
        this.asignacionesServices.eliminarAsignacion(b).subscribe((res)=>{
          this.getAsignaciones();
          this.getTrabajadores();

        },(error:any)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se a Podido eliminar al mantenedor!'
          })
        }
        )
      }
    })


  }

}
