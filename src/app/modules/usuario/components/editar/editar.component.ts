import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RolService } from 'src/app/core/_services/rol.service';
import { UsuariosService } from 'src/app/core/_services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  toppings = new FormControl();
  formulario!: FormGroup;
  roles: any;
  selectRoles: any;
  rut!:string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuarioServices: UsuariosService,
    private _formBuilder: FormBuilder,
    private rolService: RolService
  ) {
    this.formulario = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido_paterno: ['', Validators.required],
      apellido_materno: ['', Validators.required],
      rut: ['', Validators.required],
      correo: ['', Validators.required],
      roles: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.rut = parametros.get('rut')!;
      this.usuarioServices.getUsuario(this.rut).subscribe((res) => {
        let usuario = res.data;
        this.formulario = this._formBuilder.group({
          nombre: [usuario.nombre, Validators.required],
          apellido_paterno: [usuario.apellido_paterno, Validators.required],
          apellido_materno: [usuario.apellido_materno, Validators.required],
          rut: [usuario.rut, Validators.required],
          correo: [usuario.correo, Validators.required],
          roles: ["", Validators.required],
        });
      });
    });

    this.getRoles();
  }
  getRoles() {
    this.rolService.getRoles().subscribe((res) => {
      this.roles = res.data;
    });
  }
  cancelar() {
    this.router.navigate(['app/usuario/listar']);
  }

  add(){
    let id_rol = parseInt(localStorage.getItem("id_rol"))
    this.usuarioServices.updateUsuario(id_rol,this.formulario.value).subscribe((res) => {
      this.router.navigate(['app/usuario/listar'])
      Swal.fire({
        icon: 'success',
        title: 'Los datos del usuarios se actualizaron!!',
        showConfirmButton: false,
        timer: 1500
      })
    },(error:any)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se ha podido actualizar los datos del usuario!'
      })
    }
    );
  }
}
