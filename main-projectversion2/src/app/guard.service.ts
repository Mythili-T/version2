import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
userloggedin(username: any, password: any) {
  throw new Error('Method not implemented.');
}
constructor() { }
isUserLoggedIn(){
  return false;
}
}


