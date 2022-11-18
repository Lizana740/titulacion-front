import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MedicionRoutingModule } from './medicion-routing.module';
import { ListaComponent } from './components/lista/lista.component';


@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    MedicionRoutingModule,
    SharedModule
  ]
})
export class MedicionModule { }


export class helloworldo{}
