import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userList:Array<any>=[]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userList=this.userService.returnUser();
  }
  deleteRow(user:any){
    const index = this.userList.indexOf(user);
    this.userList.splice(index, 1);
}

}
