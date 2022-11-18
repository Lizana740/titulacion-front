import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/core/_services/usuarios.service';
import { FormBuilder, UntypedFormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { RolService } from 'src/app/core/_services/rol.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  formulario!: FormGroup;
  roles:any;
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
              private rolService:RolService) {}
  ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido_paterno: ['', Validators.required],
      apellido_materno: ['', Validators.required],
      rut: ['', Validators.required],
      correo: ['', Validators.required],
      id_rol: ['', Validators.required],

    })

    this.getUsuarios();
    this.getRoles();
    this.statuses = [
      { label: 'Administrador', value: 'unqualified' },
      { label: 'Mantenedor', value: 'qualified' },
      { label: 'Planta', value: 'new' },
    ];

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
  getRoles(){
    this.rolService.getRoles().subscribe(res=> {
      this.roles = res.data;
    })
  }
  add(){
    console.log("FORMULARIO",this.formulario.value)
    this.usuarioServices.addUsuario(this.formulario.value).subscribe((res) => {
      this.display = false;
      this.getUsuarios();
    }
    );
  }

}
