import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaComponent } from './components/vista/vista.component';
const routes: Routes = [
  {
    path: 'vista',
    component: VistaComponent,
    data: {title: 'dede'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
