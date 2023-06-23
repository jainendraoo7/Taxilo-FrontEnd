import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/components/service/UserService/user.service';
import { CabBooking } from '../../cab-booking/CabBookin';
import { BackendService } from 'src/app/components/service/backend.service';
import { LogInService } from 'src/app/components/service/log-in.service';

@Component({
  selector: 'app-all-trips',
  templateUrl: './all-trips.component.html',
  styleUrls: ['./all-trips.component.css']
})
export class AllTripsComponent implements OnInit {

  trips: CabBooking[]  = [];

  constructor(public userService: UserService, private backend: LogInService){}

  customerId: number = this.backend.getUser().customerId;

  ngOnInit(): void {
      this.allTripsByUser(this.customerId);
  }
  


  allTripsByUser(customerId: number){

  this.userService.allTripsByUser(customerId).subscribe(

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
