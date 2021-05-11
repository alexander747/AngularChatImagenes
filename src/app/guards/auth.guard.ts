import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)  {
    console.log("pasando por el guard");
    if( localStorage.getItem('token') ){
      return true
    }else{
      this.router.navigateByUrl('/login');
    }
  }
  
}
