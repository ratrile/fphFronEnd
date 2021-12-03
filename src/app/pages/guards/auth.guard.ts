import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicioService  } from '../../servicio/servicio.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: ServicioService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    console.log("Guard user_id:", this.service.privilegio);   
    console.log(this.service.privilegio!=0);  
    if (this.service.privilegio != 0){      
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
