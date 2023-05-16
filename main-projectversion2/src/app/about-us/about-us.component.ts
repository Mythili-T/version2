import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  userlogin:any;
  constructor(private route:Router) { }

  ngOnInit() {
    this.userlogin=sessionStorage.getItem('UserLogin');
  }

  logout(){
    sessionStorage.clear();
    this.userlogin=false;
    this.route.navigate(['home']);
  }
}
