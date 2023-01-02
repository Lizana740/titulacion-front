import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizarComponent } from './components/visualizar/visualizar.component';
import { FactoresRoutingModule } from './factores-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VisualizarComponent
  ],
  imports: [
    CommonModule,
    FactoresRoutingModule,
    SharedModule,

  ]
})
export class FactoresModule {

}
