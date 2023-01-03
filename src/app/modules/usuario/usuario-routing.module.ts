import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ListarComponent } from './components/listar/listar.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent,
    data: {title: 'dede'}
  },
  {
    path: 'agregar',
    component: AgregarComponent,
    data: {title: 'dede'}
  },
  {
    path: 'editar/:rut',
    component: EditarComponent,
    data: {title: 'dede'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
