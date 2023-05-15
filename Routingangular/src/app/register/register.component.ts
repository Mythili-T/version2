import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles:[`input.ng-invalid{border :5px solid red;}

  input.ng-valid{border:5px solid green;}`
]
})
export class RegisterComponent  {

  constructor(private userservice:UserService) { }

  ngOnInit() {
  }
  exit() :boolean{
    console.log("you have to register")
    if(confirm("if you want to leave the page ! please press yes to continue")){
      return true;
    }
    else{
      return false;
    }
  }
username:any=" ";
mobilenum:any=" ";
email:any=" ";

submitform(){
 var body={
  uname:this.username,
  mobile:this.mobilenum,
  emailid:this.email
 }
  this.userservice.addUserInformation(body).subscribe((data: any)=>{
    alert("form submitted");
  })
 }

}
