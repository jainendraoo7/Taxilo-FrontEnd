import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/components/service/DriverService/driver.service';
import { LogInService } from 'src/app/components/service/log-in.service';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.css']
})
export class DriverProfileComponent implements OnInit {

  constructor(public login: LogInService, private driverService: DriverService) { }

  ngOnInit(): void {

  }

  Available(driverId: number) {

    this.driverService.setAvailable(driverId).subscribe(

      (data:any) => {
        
        localStorage.removeItem("user")

        this.login.setUser(data);

      },
      error => {
        console.log(error);
      }
    )
  }



  NotAvailable(driverId: number) {

    this.driverService.setNotAvailable(driverId).subscribe(

      (data:any) => {
        localStorage.removeItem("user")

        this.login.setUser(data);
      },
      error => {
        console.log(error);
      }
    )

  }



}
