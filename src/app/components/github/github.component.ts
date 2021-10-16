import { Component, OnInit } from '@angular/core';
import { UsersService } from '../.././services/user/users.service';
import { RepoService } from '../.././services/repo/repo.service';
import{Userdata} from '../../intefaces/userdata';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  search:string;
  users:any;
  repos:Array<any>;
  

  constructor(private userService:UsersService, private repoService:RepoService) { 
    this.search="sling254"
    this.users ={}

  }

  
  ngOnInit(): void {
    this.onsubmit()

  }
  async onsubmit(){
    if(!this.search){
      alert("Username cannot be empty")

    }

    this.users= await this.userService.getUsers(this.search)
    console.log({USERS:this.users});


    this.repos = await this.repoService.getRepos(this.search)
    console.log({REPOS:this.repos});
    

    //clear input
    this.search = '';
  }

}
