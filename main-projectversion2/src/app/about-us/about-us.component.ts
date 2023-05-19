import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
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
