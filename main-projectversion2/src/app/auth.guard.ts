import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authenticationService:AuthenticationService,private route:Router){ }
  canActivate()
    {
      if(sessionStorage.getItem("usersuccess")){
        return true;
      }
      else{
        window.alert('You are not logged in to view page');
        this.route.navigate(['login']);
        return false;
      }


  }
}
