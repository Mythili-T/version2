import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  car:any="please select the Fav Car";

  status:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  toggleCase(){

    this.status=!this.status

  }


}
