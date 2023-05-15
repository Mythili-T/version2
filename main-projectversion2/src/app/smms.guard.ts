import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class SMMSGuard implements CanActivate {
  constructor(private service:GuardService,private route:Router ){

  }
  canActivate()
    {
      if(this.service.isUserLoggedIn()){
        return true;
      }
      else{
        window.alert('Please Login to view the Page');
        this.route.navigate(["login",{retUrl:this.route.url}]);
        return false;
      }
  }

}
