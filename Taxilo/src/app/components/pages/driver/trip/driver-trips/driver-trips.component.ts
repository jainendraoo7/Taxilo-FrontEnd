import { Component,OnInit } from '@angular/core';
import { CabBooking } from '../../../admin/cab-booking/CabBookin';
import { DriverService } from 'src/app/components/service/DriverService/driver.service';
import { LogInService } from 'src/app/components/service/log-in.service';
import { UserService } from 'src/app/components/service/UserService/user.service';

@Component({
  selector: 'app-driver-trips',
  templateUrl: './driver-trips.component.html',
  styleUrls: ['./driver-trips.component.css']
})
export class DriverTripsComponent implements OnInit {

  trips: CabBooking[] = [];

  constructor(public driverService: DriverService, public login: LogInService, private userService: UserService){}

  driverId: number = this.login.getUser().driverId;

  ngOnInit(): void {
      this.allTripsOfDriver(this.driverId)
  }

   

  
   

  allTripsOfDriver(driverId: number){

    this.driverService.allTripsOfDriver(driverId).subscribe(

      trips => {
        this.trips = trips;
        console.log(trips);
        
      },
      error => {
        console.log(error);
      }

    )

  }


  
  tripDetail(tripBookingId: number){

    this.userService.currentTrip(tripBookingId).subscribe(

      (data:any) => {

        localStorage.setItem("tripDetails", JSON.stringify(data));

        window.location.href="/tripDetail";

      },
      error => {
        console.log(error);
        
      }

    )

  }
}
