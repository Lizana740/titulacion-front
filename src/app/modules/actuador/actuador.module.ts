import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActuadorRoutingModule } from './actuador-routing.module';
import { ListaComponent } from './components/lista/lista.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    ActuadorRoutingModule,
    SharedModule
  ]
})
export class ActuadorModule { }
