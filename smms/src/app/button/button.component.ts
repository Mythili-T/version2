import { Component } from '@angular/core';
import { registerCountservice } from '../service.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
constructor(private serv:registerCountservice){ }

incrementregisterCount(){
  this.serv.incrementCount();
}
}


