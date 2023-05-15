import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { ChildComponent } from './child/child.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DeactiveGuard } from './deactive.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"Product",
    component:ProductComponent,
    children:[{
      path:":check",
      component:ChildComponent

    }]
    // canActivate:[AuthenticationGuard],
  },
  {
     path:"Login",
    component:LoginComponent
  },
  {
    path:"Contact-us",
    component:ContactusComponent
  },
  {
    path:"register",
    component:RegisterComponent,
    canDeactivate:[DeactiveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
