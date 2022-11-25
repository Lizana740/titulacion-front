import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/core/_services/usuarios.service';
import { FormBuilder, UntypedFormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { RolService } from 'src/app/core/_services/rol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {

  entity:any =[]
  display:boolean = false
  edit:boolean = false
  representatives: any[] = [];
  statuses: any[] = [];
  usuarios: any[] = [];
  loading: boolean = true;
  activityValues: number[] = [0, 100];
  constructor(private usuarioServices: UsuariosService,
              private _formBuilder: FormBuilder,
              private rolService:RolService,
              private router:Router
              ) {

              }

  ngOnInit(): void {
    this.statuses = [
      { label: 'Administrador', value: 'unqualified' },
      { label: 'Mantenedor', value: 'qualified' },
      { label: 'Planta', value: 'new' },
    ];
    this.getUsuarios();
    this.loading = false;
  }

  delete(rut: string) {
    console.log(rut)

    this.usuarioServices.deleteUsuario(rut).subscribe((res) => {
      console.log('Usuario Eliminado', rut);
      this.ngOnInit();
    });
  }
  getUsuarios(){
    this.usuarioServices.getUsuarios().subscribe((res) => {
      this.usuarios = res.data;
    });
  }

  agregar(){
    this.router.navigate(['app/usuario/agregar'])
  }


}
