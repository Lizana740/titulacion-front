import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/core/_services/autentificacion.service';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { UsuariosService } from 'src/app/core/_services/usuarios.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css'],
})
export class VistaComponent implements OnInit {
  formularioUsuario!: FormGroup;
  constructor(
    private authServices: AutentificacionService,
    private _formBuilder: FormBuilder,
    private usuarioServices: UsuariosService,
    private router :Router
  ) {}

  ngOnInit(): void {
    let usuario:any = this.authServices.infoUser();
    console.log(usuario)
    this.formularioUsuario = this._formBuilder.group({
      nombre: [usuario.nombre, Validators.required],
      apellido_paterno: [usuario.apellido_paterno, Validators.required],
      apellido_materno: [usuario.apellido_materno, Validators.required],
      rut: [usuario.rut, Validators.required],
      correo: [usuario.correo, Validators.required],
      clave: [''],
    });
  }
  actualizar(){
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
        let id_rol = parseInt(localStorage.getItem('id_rol'))
        this.usuarioServices.updateUsuario(id_rol, this.formularioUsuario.value).subscribe((res)=>{
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
}
