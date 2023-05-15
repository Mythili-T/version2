import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiservice';
  value:any;
  constructor(private service:ApiserviceService){
    this.service.getapiservice().subscribe(data=>{
      this.value=data;
    })
  }
  // constructor(private service:ApiserviceService){
  //   console.log(this.service.getapiservice());
  // }

}
