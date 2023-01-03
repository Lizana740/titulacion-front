import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaComponent } from './components/vista/vista.component';

const routes: Routes = [
  {
    path: 'listar',
    component: VistaComponent,
    data: {title: ''}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }