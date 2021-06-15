import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { ChartComponent } from './chart/chart.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductviewComponent } from './productview/productview.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserviewComponent } from './userview/userview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    DashboardComponent,
    CardComponent,
    ChartComponent,
    ProductlistComponent,
    ProductcreateComponent,
    ProducteditComponent,
    ProductviewComponent,
    UserlistComponent,
    UsercreateComponent,
    UsereditComponent,
    UserviewComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
