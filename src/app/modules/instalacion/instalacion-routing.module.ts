import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAsignadaComponent } from './components/lista-asignada/lista-asignada.component';
import { ListarComponent } from './components/listar/listar.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent,
    data: {breadcrumb: {label : "Lista"}}
  },
  {
    path: 'trabajadores/:id_estacion',
    component: TrabajadoresComponent,
    data: {title: 'dede'}
  },
  {
    path: 'asignada',
    component: ListaAsignadaComponent,
    data: {title: 'dede'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstalacionRoutingModule { }
