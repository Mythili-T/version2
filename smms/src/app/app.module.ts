import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { ColorComponent } from './color/color.component';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { MobileModule } from './mobile/mobile.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PipeComponent,
    ColorComponent,
    ButtonComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule,
    MobileModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
