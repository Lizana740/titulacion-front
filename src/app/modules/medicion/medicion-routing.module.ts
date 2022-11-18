import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
const routes: Routes = [
  {
    path: 'listar',
    component: ListaComponent,
    data: {title: ''}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicionRoutingModule { }
