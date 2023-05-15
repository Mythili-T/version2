import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';



export interface IDeactivateComponent{
  exit:()=>boolean;
}
export class DeactiveGuard implements CanDeactivate<unknown> {

  canDeactivate(
    component: IDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):boolean {
    return component.exit?component.exit():false;
  }

}
