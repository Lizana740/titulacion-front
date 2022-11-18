import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent,
    data: {title: 'dede'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }