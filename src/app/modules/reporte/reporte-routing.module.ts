import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaComponent } from './components/vista/vista.component';

const routes: Routes = [
  {
    path: 'lista',
    component: VistaComponent,
    data: {breadcrumb: {label : "Lista de Reportes"}}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
