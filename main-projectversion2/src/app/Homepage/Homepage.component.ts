import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Homepage',
  templateUrl: './Homepage.component.html',
  styleUrls: ['./Homepage.component.css']
})
export class HomepageComponent implements OnInit {
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
