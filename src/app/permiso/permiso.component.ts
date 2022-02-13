import { OnInit } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'ngx-auth',
  styleUrls: ['permiso.component.scss'],
  template: `
    <ngx-login-column-layout>          
      <router-outlet></router-outlet>      
    </ngx-login-column-layout> 
  `,
})
export class AuthComponent {
  ngOnInit() {
    //alert ("Show red block");

  }
}
