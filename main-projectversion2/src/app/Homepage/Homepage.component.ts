import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-Homepage',
  templateUrl: './Homepage.component.html',
  styleUrls: ['./Homepage.component.css']
})
export class HomepageComponent implements OnInit {
 // loginForms: any;
  // userlogin:any;
  usersuccess=false;
  constructor(private route:Router,private authenticationService:AuthenticationService) {
    this.usersuccess=Boolean(sessionStorage.getItem("usersuccess"))||this.authenticationService.userlogin
   }

  ngOnInit() {

  }

  logout(){
    this.authenticationService.userlogin=false;
    this.usersuccess=false;
    sessionStorage.clear();

    this.route.navigate(['Home']);

  }

}
