import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/components/service/UserService/user.service';
import { LogInService } from 'src/app/components/service/log-in.service';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit{

   constructor(public userService: UserService, public login: LogInService){}

  ngOnInit(): void {
      
  }

  isUser():boolean{

    if(this.login.getUserRole()=="USER"){
      return true;
    }
    else return false;

  }

  isDriver():boolean{

    if(this.login.getUserRole()=="DRIVER"){
      return true;
    }
    else return false;

  }

  isAdminUser(): boolean {
   
    if(this.login.getUserRole()=='ADMIN'){
      return true
    }
    else{

    return false;
  }
}


}
