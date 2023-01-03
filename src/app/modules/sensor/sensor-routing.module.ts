import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListaComponent,
    data: {title: ''}
  },
  {
    path: 'editar/:id_sensor',
    component: EditarComponent,
    data: {title: ''}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorRoutingModule { }
