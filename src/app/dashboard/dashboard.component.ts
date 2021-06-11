import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  title = 'admin';
  data=[
    {
      cardcolor:"bg-primary",
      cardtype:"Primary Card"
    },
    {
      cardcolor:"bg-warning",
      cardtype:"Warning Card"
    },
    {
      cardcolor:"bg-success",
      cardtype:"Success Card"
    },
    {
      cardcolor:"bg-danger",
      cardtype:"Danger Card"
    }
  ]
  

}
