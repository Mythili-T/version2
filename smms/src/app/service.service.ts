import { Injectable } from '@angular/core';
import {HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class registerCountservice {
  registerCount:any=0;
  incrementCount(){
    this.registerCount=this.registerCount+1;
    console.log("The student register are  "+this.registerCount)
  }
}
