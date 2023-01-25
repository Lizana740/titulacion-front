import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizarComponent } from './components/visualizar/visualizar.component';

const routes: Routes = [
  {
    path: 'visualizar',
    component: VisualizarComponent,
    data: {breadcrumb: {label : "Datos en tiempo real"}}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactoresRoutingModule { }
