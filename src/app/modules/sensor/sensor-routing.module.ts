import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListaComponent,
    data: {breadcrumb: {label : "Lista de Sensores"}}
  },
  {
    path: 'editar/:id_sensor',
    component: EditarComponent,
    data: {breadcrumb: {label : "Editar Sensor"}}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorRoutingModule { }
