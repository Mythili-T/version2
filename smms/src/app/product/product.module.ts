import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDisplayComponent } from './ProductDisplay/ProductDisplay.component';




@NgModule({
  declarations: [ProductDisplayComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductDisplayComponent]
})
export class ProductModule { }
