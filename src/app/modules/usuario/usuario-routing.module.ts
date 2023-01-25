import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ListarComponent } from './components/listar/listar.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  {
    path: 'listar',
    data: {breadcrumb: {label : "Lista"}},
    component: ListarComponent,
  },
  {
    path: 'agregar',
    component: AgregarComponent,
    data: {breadcrumb:  {label : "Crear usuario"} }
  },
  {
    path: 'editar/:rut',
    component: EditarComponent,
    data: {breadcrumb: {label : "Editar usuario"}}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
