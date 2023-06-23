import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/components/service/UserService/user.service';
import { LogInService } from 'src/app/components/service/log-in.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 

  constructor(public userService: UserService, public login: LogInService) { }

  ngOnInit(): void {

  }


  update(){

    window.location.href="/userUpdate"

  }


}
