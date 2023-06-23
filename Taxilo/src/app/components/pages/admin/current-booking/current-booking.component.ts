import { Component, OnInit} from '@angular/core';
import { DriverService } from 'src/app/components/service/DriverService/driver.service';
import { UserService } from 'src/app/components/service/UserService/user.service';
import { BackendService } from 'src/app/components/service/backend.service';

@Component({
  selector: 'app-current-booking',
  templateUrl: './current-booking.component.html',
  styleUrls: ['./current-booking.component.css']
})
export class CurrentBookingComponent implements OnInit {

  constructor(public driverService: DriverService, private userService: UserService){}

  ngOnInit(): void {
     
  }

  cancel(tripBookingId: number){

    this.userService.cancelBooking(tripBookingId).subscribe(

      response => {

        console.log(response);
        
        localStorage.removeItem("current-booking");

        window.location.href = "/BookCab"

      },
      error => {
        console.log(error);
        
      }

    )

  }



}
