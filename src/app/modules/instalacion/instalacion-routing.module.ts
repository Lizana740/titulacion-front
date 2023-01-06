import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent,
    data: {title: 'dede'}
  },
  {
    path: 'trabajadores/:id_estacion',
    component: TrabajadoresComponent,
    data: {title: 'dede'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstalacionRoutingModule { }
