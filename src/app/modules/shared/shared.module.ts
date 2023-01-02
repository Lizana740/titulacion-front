/* ANGULAR IMPORT */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
/* END */

/* NGPRIME IMPORT*/
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
/* END */

/* MATERIAL */
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';

/* END */

/*COMPONENTS*/
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    MenuComponent,
    NotfoundpageComponent,
    FooterComponent,
  ],
  imports: [
    MatTabsModule,
    ButtonModule,
    PanelModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    PanelMenuModule,
    AvatarModule,
    BreadcrumbModule,
    MenuModule,
    MatButtonModule,
    AutoCompleteModule,
  ],
  providers: [MessageService],
  bootstrap: [],
  exports: [
    MatTabsModule,
    ButtonModule,
    SidebarModule,
    MenuModule,
    PanelModule,
    TableModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    DropdownModule,
    DialogModule,
    ToastModule,
    InputTextModule,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    NotfoundpageComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    PanelMenuModule,
    BreadcrumbModule,
    MatButtonModule,
    MatIconModule,
    AutoCompleteModule
  ],
})
export class SharedModule {

}
