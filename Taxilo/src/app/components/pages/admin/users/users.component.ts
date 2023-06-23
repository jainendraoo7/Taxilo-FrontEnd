import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/components/service/backend.service';
import { Users } from './users';
import { LogInService } from 'src/app/components/service/log-in.service';
import { UserService } from 'src/app/components/service/UserService/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[] = [];

  filterUsers: Users[] = [];
  
  constructor(private bs: BackendService, private login: LogInService, private userService: UserService) { }

  ngOnInit(): void {
    this.UserData();
  }

  UserData() {


    this.bs.UserData().subscribe(
       
      users => {

        this.users = users;
        this.filterUsers = users;
      },

      error => {
        console.log(error);

      },

    )

  }

  deleteUser(customerId: number){

    this.userService.DeleteUser(customerId).subscribe(

      response => {
        console.log(response);
      },
      error => {
        console.log(error);
        
      }

    )

  }

  searchTerm: string = "";
  searchUsers() {
    this.filterUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.customerId.toString().includes(this.searchTerm) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.mobile.toString().includes(this.searchTerm)
    );
  }

}
