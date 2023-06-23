import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/components/service/backend.service';
import { Driver } from './driver';
import { LogInService } from 'src/app/components/service/log-in.service';
import { Users } from '../users/users';
import { DriverService } from 'src/app/components/service/DriverService/driver.service';






@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  drivers: Driver[] = [];

  filterDrivers: Driver[] = [];


  constructor(private driver: BackendService, private login: LogInService, private driverService: DriverService) { }

  ngOnInit(): void {
    this.DriverData();
    // this.deleteDriver();
  }

  DriverData() {

    // const table = document.getElementById("table")

    this.driver.DriverData().subscribe(

      drivers => {

        this.drivers = drivers;
        console.log(drivers);
        this.filterDrivers = drivers;
      },

      error => {
        console.log(error);

      }

    )

  }


  updateDriver() {


    alert("update");

  }

  deleteDriver(driverId: number) {




    this.driverService.DeleteDriver(driverId).subscribe(

      response => {

        // alert("deleteted");

        console.log(response);

      },
      error => {
        console.log(error);
      }

    )


  }


  driverDetails(driverId: number) {

    this.driverService.GetDriverById(driverId).subscribe(

     (driverData: any) => {
      console.log(driverData.name);
      localStorage.setItem("driver", JSON.stringify(driverData));
      window.location.href="/driverDetails";
     },
     error => {
      console.log(error);
      
     }

    )

  }

  searchTerm: string = "";
  searchDrivers() {
    this.filterDrivers = this.drivers.filter((driver) =>
      driver.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      driver.driverId.toString().includes(this.searchTerm) ||
      driver.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      driver.mobile.toString().includes(this.searchTerm) ||
      driver.license.toLowerCase().includes(this.searchTerm.toLowerCase())

    );
  }



  

}
