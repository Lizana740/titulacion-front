import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/core/_services/autentificacion.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  hideConfirm = true;
  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  formularioLogin:FormGroup;

  constructor(  private _formBuilder: FormBuilder,
                private login:AutentificacionService,
                private route:Router,
    ) {
    this.formularioLogin = this._formBuilder.group({
      correo: ['', Validators.required],
      clave: ['', Validators.required],
    });

    console.log("Rol", localStorage.getItem("rol"))
  }
  submitLogin(){
  this.login.login(this.formularioLogin.value).subscribe(res=>{
    localStorage.setItem("token", res.token);
    console.log("token", res.token);
    this.route.navigate(["/app"])
  })
  }

  obtenerInformacionUsuario(){
    let token = localStorage.getItem("token");
    if(token){
      return jwtDecode(token);
    }
  }


}
