
import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/user/users.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public username:string = 'sling254' 

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
  }
  users:any =[];

  getUser(){
    this.userService.getUsers(this.username).then((response)=>{
      console.log(response);
    }).catch((err) => {
      alert(err.status);
      console.log(err);
    }).finally(()=>{
      console.log("this is the finally block")

    });
      
      
  }

}
