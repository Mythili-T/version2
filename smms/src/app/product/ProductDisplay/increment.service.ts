import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncrementService {
  add:number=0;
constructor() { }
incrementCount(){
  this.add=this.add+1;
  console.log('total'+this.add);
}
}
