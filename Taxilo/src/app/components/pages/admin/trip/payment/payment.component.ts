import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/components/service/UserService/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public userService: UserService){}

  ngOnInit(): void {
      
  }

  payBill(tripBookingId: number){

    this.userService.payTripBill(tripBookingId).subscribe(

      (data:any) => {

        console.log(data);
        
        localStorage.setItem("current-booking", JSON.stringify(data));

        window.location.href="/admin/current-booking";

      },
      error => {
        console.log(error);
      }

    )

  }

}
