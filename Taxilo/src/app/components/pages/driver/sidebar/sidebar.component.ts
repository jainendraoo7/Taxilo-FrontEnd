import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/components/service/UserService/user.service';
import { LogInService } from 'src/app/components/service/log-in.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class DriverSidebarComponent implements OnInit {

  constructor(private userService: UserService, private login: LogInService) { }

  ngOnInit(): void {

  }

  driverId: number = this.login.getUser().driverId;


  tripOn(): boolean{

    if(this.userService.getCurrentBooking()!==null && this.driverId==this.userService.getCurrentBooking().driver.driverId){
      return true;
    }
    else 
    return false;

  }

}
