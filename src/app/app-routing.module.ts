import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductviewComponent } from './productview/productview.component';
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
    path:"productlist",
    component:ProductlistComponent
  },
  {
    path:"productedit",
    component:ProducteditComponent
  },
  {
    path:"productview",
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
    path:"useredit",
    component:UsereditComponent
  },
  {
    path:"userview",
    component:UserviewComponent
  },
  {
    path:"usercreate",
    component:UsercreateComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
