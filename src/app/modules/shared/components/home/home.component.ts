import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items?: MenuItem[]= undefined;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
      this.items = [
          {
              label: 'Options',
              items: [{
                  label: 'Update',
                  icon: 'pi pi-refresh',
                  command: () => {
                      this.update();
                  }
              },
              {
                  label: 'Delete',
                  icon: 'pi pi-times',
                  command: () => {
                      this.delete();
                  }
              }
          ]},
          {
              label: 'Navigate',
              items: [{
                  label: 'Angular Website',
                  icon: 'pi pi-external-link',
                  url: 'http://angular.io'
              },
              {
                  label: 'Router',
                  icon: 'pi pi-upload',
                  routerLink: '/fileupload'
              }
          ]}
      ];
  }

  update() {
      this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
      this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
  }
}
