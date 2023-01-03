import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorRoutingModule } from './sensor-routing.module';
import { ListaComponent } from './components/lista/lista.component';
import { SharedModule } from '../shared/shared.module';
import { EditarComponent } from './components/editar/editar.component';


@NgModule({
  declarations: [
    ListaComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    SensorRoutingModule,
    SharedModule
  ]
})
export class SensorModule { }
