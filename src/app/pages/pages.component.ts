import { Component } from '@angular/core';

import { MENU_ITEMS, MENU_ITEM_LECTURADOR } from './pages-menu';
import { ServicioService } from '../servicio/servicio.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
 menu : any;
  constructor(private servicio: ServicioService) { }
  ngOnInit(): void {
    if (this.servicio.privilegio == 1) {
      this.menu = MENU_ITEMS;
    }
    if(this.servicio.privilegio == 2){
      this.menu = MENU_ITEM_LECTURADOR;
    }
  }
  //menu = MENU_ITEMS;
}
