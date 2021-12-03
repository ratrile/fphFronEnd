import { Component, Input } from '@angular/core';
import { ServicioService} from '../../servicio/servicio.service';
import {Router} from '@angular/router';
//import { Globals } from '../../servicios/globals';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], 
  styles: [`
      :host {
         height: 100%        
      }`]  
})
export class LoginComponent {
  /*@Input()
  url: string = "http://localhost/llamadas_index_x.php";
  urlSafe: SafeResourceUrl;
  constructor(private httpService: HttpService, public sanitizer: DomSanitizer) {    
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);    
  }*/
  user = {
    correo: null,
    pass: null,    
  }

  constructor(private httpService: ServicioService, public router: Router) { }
  login(user) {    
    console.log(user);
    this.httpService.login(user).subscribe (
      (datos:any) => {
        /*if(datos[0]?.privilegios != undefined)         
        console.log('si'); 
        else
        console.log('no')*/
        if(datos[0]?.privilegios != undefined)  {
          //console.log(datos['data']['name']); 
          //this.globals.user_id=datos['data']['user_id'];
          //this.router.navigate(['/pages', datos['data']['user_id']]);
          this.httpService.privilegio = datos[0].privilegios
          this.router.navigate(['/pages']);
          
          //this.isLogin=true;          
        } else {
          //alert(datos['mensaje']);
          this.router.navigate(['/login']); 
        }     
      }
    );
  }    

}
