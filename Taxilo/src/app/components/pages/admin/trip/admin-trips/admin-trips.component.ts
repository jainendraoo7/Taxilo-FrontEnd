import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/components/service/UserService/user.service';
import { CabBooking } from '../../cab-booking/CabBookin';

@Component({
  selector: 'app-admin-trips',
  templateUrl: './admin-trips.component.html',
  styleUrls: ['./admin-trips.component.css']
})
export class AdminTripsComponent implements OnInit{

  trips: CabBooking[]  =[];

  constructor(public userService: UserService){}

  ngOnInit(): void {
      this.allTripsForAdmin();
  }

  allTripsForAdmin(){

    this.userService.allTripsForAdmin().subscribe(

      trips => {
        this.trips = trips;
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
