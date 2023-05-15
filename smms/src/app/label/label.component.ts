import { Component } from '@angular/core';
import { registerCountservice } from '../service.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent {
  constructor(private service:registerCountservice){ }
    incrementlabelregisterCount(){
      this.service.incrementCount();
    }
  }

