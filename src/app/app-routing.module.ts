import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './modules/shared/components/menu/menu.component';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { LoginComponent } from './modules/shared/components/login/login.component';
import { NotfoundpageComponent } from './modules/shared/components/notfoundpage/notfoundpage.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'/login', pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'app',
    component:MenuComponent,
    data: {breadcrumb: {label : "Inicio"}},
    children : [
      {
        path:'estacion',
        data: {breadcrumb: {label : "Estación"}, only:['ADMINISTRADOR']},
        loadChildren: () => import('./modules/instalacion/instalacion.module').then(m => m.InstalacionModule),

       },
       {
        path:'usuario',
        data: {breadcrumb: {label : "Usuarios"},only:['ADMINISTRADOR']},
        loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule),

       },
       {
        path:'sensor',
        data: {breadcrumb: {label : "Sensor"}},
        loadChildren: () => import('./modules/sensor/sensor.module').then(m => m.SensorModule),
       },
       {
        path:'actuador',
        data: {breadcrumb: {label : "Actuador"}},
        loadChildren: () => import('./modules/actuador/actuador.module').then(m => m.ActuadorModule),
       },
       {
        path:'perfil',
        data: {breadcrumb: {label : "Perfil"}},
        loadChildren: () => import('./modules/perfil/perfil.module').then(m => m.PerfilModule),

       },
       {
        path:'medicion',
        data: {breadcrumb: {label : "Medicion"}},
        loadChildren: () => import('./modules/medicion/medicion.module').then(m => m.MedicionModule),

       },
       {
        path:'factor',
        data: {breadcrumb: {label : "Factores Abioticos"}},
        loadChildren: () => import('./modules/factores/factores.module').then(m => m.FactoresModule),

       },
       {
        path:'reporte',
        data: {breadcrumb: {label : "Reportes"}},
        loadChildren: () => import('./modules/reporte/reporte.module').then(m => m.ReporteModule),

       },
       {
        path:'plan',
        data: {breadcrumb: {label : "Planes"}},
        loadChildren: () => import('./modules/plan/plan.module').then(m => m.PlanModule),
       },
       {
        path:'',
        component:HomeComponent
       }
    ]
   },
   {
    path:'**',
    component:NotfoundpageComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
