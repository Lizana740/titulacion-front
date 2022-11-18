import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { VistaComponent } from './components/vista/vista.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    VistaComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    SharedModule
  ]
})
export class PerfilModule { }
