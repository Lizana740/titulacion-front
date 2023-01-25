import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { ListaComponent } from './components/lista/lista.component';
import { SharedModule } from '../shared/shared.module';
import { AgregarComponent } from './components/agregar/agregar.component';


@NgModule({
  declarations: [
    ListaComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule,
    SharedModule
  ]

})
export class PlanModule { }
