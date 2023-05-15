import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileDisplayComponent } from './MobileDisplay/MobileDisplay.component';



@NgModule({
  declarations: [MobileDisplayComponent],
  imports: [
    CommonModule
  ],
  exports:[MobileDisplayComponent]
})
export class MobileModule { }
