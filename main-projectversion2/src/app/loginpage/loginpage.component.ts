import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { GuardService } from '../guard.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  username:any="";
  password:any="";
  retUrl:any="";

  constructor(private fb:FormBuilder,private http:HttpClient,private login:RegisterService,private route:Router,
    private logservice:GuardService,private router:ActivatedRoute,private authenticationService:AuthenticationService) { }

  ngOnInit() {

  }
  loggedIn(){
    this.logservice. userloggedin(this.username,this.password);
    if(this.retUrl!=null)
    this.route.navigate([this.retUrl]);
  }

  loginForm=this.fb.group({
    namevalue:[,Validators .required],
    passwordvalue:[,Validators .required],

  })
submitLoginForm(){
  this.http.get<any>('http://localhost:3000/registeruser').subscribe(res=>{
    const user=res.find((a:any)=>a.namevalue===this.loginForm.value.namevalue && a.passwordvalue===this.loginForm.value.passwordvalue);
    if(user){
      alert("Login successfully");
      sessionStorage.setItem('usersuccess','true');
        this.authenticationService.userlogin=true;
      this.route.navigate(['/home'])
    }
    else{
      alert("Check your data");
    }
  });
}

}
