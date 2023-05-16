import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


userlogin=false;
  isUserLogIn=Boolean(sessionStorage.getItem("usersuccess"));
  constructor() { }
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
    this.isUserLogIn= Boolean(sessionStorage.getItem("usersuccess"));
  }

  logout() {
    this.isLoggedIn = false;
    this.isUserLogIn= Boolean(sessionStorage.getItem("usersuccess"));
  }

}
