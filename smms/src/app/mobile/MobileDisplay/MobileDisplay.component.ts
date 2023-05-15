import { Component, OnInit } from '@angular/core';
import { IncrementService } from 'src/app/product/ProductDisplay/increment.service';

@Component({
  selector: 'app-MobileDisplay',
  templateUrl: './MobileDisplay.component.html',
  styleUrls: ['./MobileDisplay.component.css']
})
export class MobileDisplayComponent implements OnInit {
  num :number=0;
  constructor(private service:IncrementService) {}
    incrementcount(){
      this.service.incrementCount()
    }

  ngOnInit() {
  }
}

