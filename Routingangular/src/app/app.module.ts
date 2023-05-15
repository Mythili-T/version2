import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { DeactiveGuard } from './deactive.guard';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      LoginComponent,
      ProductComponent,
      ContactusComponent,
      RegisterComponent,
      ChildComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [DeactiveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
