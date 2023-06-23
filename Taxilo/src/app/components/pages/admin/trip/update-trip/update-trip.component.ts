import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/components/service/UserService/user.service';

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {

  updateBooking = {
    fromDateTime: new Date(),
    toDateTime: new Date(),
    cabType: "",
  }

  constructor(public userService: UserService) { }

  ngOnInit(): void {

  }


  updateTrips(tripBookingId: number) {

    this.userService.updateTrip(tripBookingId, this.updateBooking).subscribe(

      response => {
        console.log(response);
        
        localStorage.removeItem("current-trip")

        this.userService.currentTrip(tripBookingId).subscribe(
          
          (data:any) => {

            console.log(data);
            
            localStorage.setItem("current-booking", JSON.stringify(data));

            window.location.href="/admin/current-booking";

          },
          error => {
            console.log(error);
          }
          

        )

      },

      error => {
        console.log(error);
      }

    )


  }




}
