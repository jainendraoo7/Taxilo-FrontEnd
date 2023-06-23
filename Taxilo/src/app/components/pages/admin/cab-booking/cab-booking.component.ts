import { Component, OnInit } from '@angular/core';
import { CabBooking } from './CabBookin';
import { BackendService } from 'src/app/components/service/backend.service';
import { UserService } from 'src/app/components/service/UserService/user.service';
import { LogInService } from 'src/app/components/service/log-in.service';

@Component({
  selector: 'app-cab-booking',
  templateUrl: './cab-booking.component.html',
  styleUrls: ['./cab-booking.component.css']
})
export class CabBookingComponent implements OnInit {

  cabBooking = {

    tripBookingId: 0,
    fromLocation: "",
    toLocation:  "",
    fromDateTime: new Date(),
    toDateTime: new Date(),
    cabType: "",
    distanceInKm: 0

  }

   constructor(public userService: UserService, public login: LogInService){}

  ngOnInit(): void {
     
  }

  doSubmitForm(customerId: number) {

   this.userService.TripBooking(customerId, this.cabBooking).subscribe(

     (cabBooking:any) => {

      console.log(cabBooking);
      
      this.userService.currentTrip(cabBooking.tripBookingId).subscribe(
        
        (data:any) => {
                
                localStorage.setItem("current-booking", JSON.stringify(data));

                window.location.href="/current-booking";
        },
        error => {
          console.log(error);
        }

      )



     },
     error =>{
      console.log(error);
      
     }

   )

  }

}
