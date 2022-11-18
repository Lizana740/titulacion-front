import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: `


  `,
  styles: [`
    xng-breadcrumb-root {
      padding: 8px 16px;
      display: inline-block;
      border-radius: 4px;
      background-color: #e7f1f1;
    }

    ol {
      color: white !important;
    }
     .xng-breadcrumb-trail {
     color: #fff !important;
     font-weight:500!important;
    }
  `],
  encapsulation: ViewEncapsulation.None


})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

}
