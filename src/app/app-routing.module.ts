import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductviewComponent } from './productview/productview.component';
import { RegisterComponent } from './register/register.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserviewComponent } from './userview/userview.component';

const routes: Routes = [
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"productlist",
    component:ProductlistComponent
  },
  {
    path:"productedit/:id",
    component:ProducteditComponent
  },
  {
    path:"productview/:id",
    component:ProductviewComponent
  },
  {
    path:"productcreate",
    component:ProductcreateComponent
  },
  {
    path:"userlist",
    component:UserlistComponent
  },
  {
    path:"useredit/:id",
    component:UsereditComponent
  },
  {
    path:"userview/:id",
    component:UserviewComponent
  },
  {
    path:"usercreate",
    component:UsercreateComponent
  },{
    path:"login",
    component:LoginComponent
  },{
    path:"register",
    component:RegisterComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
