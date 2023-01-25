import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
const routes: Routes = [
  {
    path: 'listar',
    component: ListaComponent,
    data: {breadcrumb: {label : "Registro de Mediciones"}}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicionRoutingModule { }
