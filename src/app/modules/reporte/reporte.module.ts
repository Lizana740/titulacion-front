import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { VistaComponent } from './components/vista/vista.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VistaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReporteRoutingModule
  ]
})
export class ReporteModule { }
