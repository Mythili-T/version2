import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

loggedIn:boolean=false;
userName:any="";
password:any="";
constructor(){}
userloggedin(u:any,p:any){
this.userName=u;
this.password=p;
this.loggedIn=true;
}
isUserloggedIn(){
  return this.loggedIn;
}
userloggedout(){
  this.loggedIn =false;
}

}
