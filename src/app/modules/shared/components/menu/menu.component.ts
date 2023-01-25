import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItem } from 'primeng/api';
import {
  administrador,
  mantenedor,
  usuario_planta,
} from 'src/app/core/_files/menu';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  Event,
} from '@angular/router';
import { AutentificacionService } from 'src/app/core/_services/autentificacion.service';
import {
  ADMINISTRADOR,
  MANTENEDOR,
  USUARIO_PLANTA,
} from 'src/app/core/_files/cons';
import { filter } from 'rxjs/internal/operators/filter';
import { isNullOrUndefined } from 'util';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  menuDisplay: boolean = false;
  pageTitle: any;
  title: any;
  items: any = [];
  url_role: any;
  mobileQuery: MediaQueryList;
  currentRoute?: string;
  private _mobileQueryListener: () => void;
  roles: any;
  rol: any;
  menuItems: any = [];

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private route: ActivatedRoute,
    private autentificacion: AutentificacionService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.menuItems = this.createBreadcrumbs(this.route.root);
/*         console.log("ITEM_CONST", administrador);
        console.log("ITEM_ALERTA", this.menuItems) */
      });

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    let url = this.router.url.split('/', 2);
    const results = url.filter((element) => {
      return element !== '';
    });
    if (!localStorage.getItem('rol')) {
      let usuario = this.autentificacion.infoUser();
      //localStorage.setItem("rol", this.usuario.usuario.roles[0].nombre);
      /* console.log('No existe rol asigado en localstore'); */
    }
    this.getRouteName();
  }
  getRouteName() {
    this.route.url.subscribe(() => {
      //console.log('TITULO -> ',this.route?.snapshot?.firstChild?.firstChild?.data['title'])
      this.pageTitle =
        this.route?.snapshot?.firstChild?.firstChild?.data['title'];
      if (this.pageTitle == 'nombre_proyecto') {
        this.pageTitle = localStorage.getItem('name_project');
      }
    });
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(
        () => (this.menuItems = this.createBreadcrumbs(this.route.root))
      );
    let u: any = this.autentificacion.infoUser();
    this.roles = u.rol;
    if (!localStorage.getItem('rol')) {
      this.rol = this.roles[0].valor;
    } else {
      this.rol = localStorage.getItem('rol');
    }

    switch (this.rol) {
      case 'ADMINISTRADOR':
        this.items = administrador;
        localStorage.setItem('id_rol', '' + ADMINISTRADOR);
        break;
      case 'MANTENEDOR':
        this.items = mantenedor;
        localStorage.setItem('id_rol', '' + MANTENEDOR);
        break;
      case 'USUARIO DE PLANTA':
        this.items = usuario_planta;
        localStorage.setItem('id_rol', '' + USUARIO_PLANTA);
        break;
    }
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.currentRoute = event.url;

        this.getRouteName();
      }

      if (event instanceof NavigationError) {
      }
    });
  }
  logout() {}

  onChangeRole(event: any) {
    localStorage.setItem('rol', event.target.value.toUpperCase());
    console.log('cAMBIO DE rol', localStorage.getItem('rol'));

    this.url_role = localStorage.getItem('rol');
    this.router.navigate(['app']).then(() => {
      window.location.reload();
    });
  }
  exit() {
    console.log('Borra todos');
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    this.router.navigate(['/login']);
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: MenuItem[] = []
  ): any {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      let label: any = child.snapshot.data['breadcrumb'];
     /*  console.log('LABEL::', label); */

      breadcrumbs.push({ label: label.label, routerLink: url });

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
