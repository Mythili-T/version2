import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:any="";
  // getProduct:any;
  constructor(private service:ProductService ) {
    this.service.getDetails().subscribe(data=>{
      this.products=data;
    });
  }
ngOnInit(): void {

}

}
