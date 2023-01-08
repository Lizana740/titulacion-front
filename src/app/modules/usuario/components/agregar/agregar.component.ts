import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RolService } from 'src/app/core/_services/rol.service';
import { UsuariosService } from 'src/app/core/_services/usuarios.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  toppings = new FormControl();
  formulario!: FormGroup;
  roles:any;
  selectRoles:any;
  constructor(private usuarioServices: UsuariosService,
    private _formBuilder: FormBuilder,
    private rolService:RolService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido_paterno: ['', Validators.required],
      apellido_materno: ['', Validators.required],
      rut: ['', Validators.required],
      correo: ['', Validators.required],
      roles: ['', Validators.required],

    })

    this.getRoles();
  }

  getRoles(){
    this.rolService.getRoles().subscribe(res=> {
      this.roles = res.data;
    })
  }


  add(){

    this.usuarioServices.addUsuario(this.formulario.value).subscribe((res) => {
      this.router.navigate(['app/usuario/listar'])
      Swal.fire({
        icon: 'success',
        title: 'Usuario agregado con éxito!!',
        showConfirmButton: false,
        timer: 1500
      })
    }
    );
  }
  cancelar(){
    this.router.navigate(['app/usuario/listar'])
  }
}
