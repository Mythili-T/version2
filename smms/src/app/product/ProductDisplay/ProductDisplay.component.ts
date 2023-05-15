import { Component, OnInit } from '@angular/core';
import { IncrementService } from 'src/app/product/ProductDisplay/increment.service';

@Component({
  selector: 'app-ProductDisplay',
  templateUrl: './ProductDisplay.component.html',
  styleUrls: ['./ProductDisplay.component.css']
})
export class ProductDisplayComponent implements OnInit {
  constructor(private service: IncrementService) { }

  ngOnInit() {
  }
  incrementproductCount(){
    this.service.incrementCount();
  }
}
