import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/core/_services/autentificacion.service';
import jwtDecode from 'jwt-decode';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  hide = true;
  hideConfirm = true;

  formularioLogin: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private login: AutentificacionService,
    private route: Router,
    private messageService: MessageService
  ) {
    this.formularioLogin = this._formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  submitLogin() {
    this.login.login(this.formularioLogin.value).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        console.log('token', res.token);
        this.route.navigate(['/app']);
      },
      (error: any) => {
        this.messageService.add({severity:'error', summary: 'Datos Invalidos', detail: 'El correo o la contraseña ingresada no son correctos'});
      }
    );
  }

  obtenerInformacionUsuario() {
    let token = localStorage.getItem('token');
    if (token) {
      return jwtDecode(token);
    }
  }
}
