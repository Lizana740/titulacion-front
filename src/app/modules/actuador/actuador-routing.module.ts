import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './components/editar/editar.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListaComponent,
    data: {title: ''}
  },
  {
    path: ':id_actuador',
    component: EditarComponent,
    data: {title: ''}
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActuadorRoutingModule { }
