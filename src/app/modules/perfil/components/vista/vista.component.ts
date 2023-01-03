import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/core/_services/autentificacion.service';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { UsuariosService } from 'src/app/core/_services/usuarios.service';
import { MessageService } from 'primeng/api';

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
    private messageService: MessageService
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
    this.usuarioServices.updateUsuario(this.formularioUsuario.value).subscribe((res)=>{

      this.messageService.add({severity:'success', summary: 'Datos Actualizados', detail: 'La información del usuario se a actualizado'});
    })
  }
}
