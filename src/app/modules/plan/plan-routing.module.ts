import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListaComponent,
    data: {breadcrumb: {label : "Lista"}}
  },
  {
    path: 'agregar/:id_estacion',
    component: AgregarComponent,
    data: {breadcrumb: {label : "Añadir plan"}}
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
