import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizarComponent } from './components/visualizar/visualizar.component';
import { FactoresRoutingModule } from './factores-routing.module';
import { SharedModule } from '../shared/shared.module';

/*CHART GAUGE*/
import { GaugeModule } from 'angular-gauge';
import { NgChartsModule , NgChartsConfiguration } from 'ng2-charts';
/* END */

@NgModule({
  declarations: [
    VisualizarComponent
  ],
  imports: [
    CommonModule,
    FactoresRoutingModule,
    SharedModule,
    GaugeModule.forRoot(),
    NgChartsModule,
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ]
})
export class FactoresModule {

}
