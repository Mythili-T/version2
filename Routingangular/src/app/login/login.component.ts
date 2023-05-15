import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any="";
  password:any="";
  retUrl:any="";

  constructor(private logservice:LoginService,private router:ActivatedRoute,private route:Router) {
    this.router.queryParams.subscribe(data=>{
      this.retUrl=data['retUrl'];
    });
  }

  ngOnInit() {
  }
loggedIn(){
  this.logservice.userloggedin(this.username,this.password);
  if(this.retUrl!=null)
  this.route.navigate([this.retUrl]);
}
}
