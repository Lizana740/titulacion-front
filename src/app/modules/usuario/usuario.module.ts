import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListarComponent } from './components/listar/listar.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { EditarComponent } from './components/editar/editar.component';


@NgModule({
  declarations: [
    ListarComponent,
    AgregarComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule
  ]
})
export class UsuarioModule { }
