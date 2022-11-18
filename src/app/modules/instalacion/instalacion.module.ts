import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstalacionRoutingModule } from './instalacion-routing.module';
import { ListarComponent } from './components/listar/listar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    InstalacionRoutingModule,
    SharedModule
  ]
})
export class InstalacionModule { }
