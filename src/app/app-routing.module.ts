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
    data:{breadcrumb:'inicio'},
    children : [
      {
        path:'instalacion',
         data: {breadcrumb: {skip : true}},
        loadChildren: () => import('./modules/instalacion/instalacion.module').then(m => m.InstalacionModule),

       },
       {
        path:'usuario',
        data: {breadcrumb: {skip : true}},
        loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule),

       },
       {
        path:'sensor',
        data: {breadcrumb: {skip : true}},
        loadChildren: () => import('./modules/sensor/sensor.module').then(m => m.SensorModule),

       },
       {
        path:'perfil',
        data: {breadcrumb: {skip : true}},
        loadChildren: () => import('./modules/perfil/perfil.module').then(m => m.PerfilModule),

       }
       ,
       {
        path:'medicion',
        data: {breadcrumb: {skip : true}},
        loadChildren: () => import('./modules/medicion/medicion.module').then(m => m.MedicionModule),

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
