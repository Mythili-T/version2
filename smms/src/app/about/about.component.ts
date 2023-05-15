import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
title:any="Welcome to My project";
color="red";
bchange="before i am change";
fun(){
  this.bchange="after i am change";
}
text:any="Enter your name";
}
