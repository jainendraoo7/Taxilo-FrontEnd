import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/components/service/DriverService/driver.service';
import { LogInService } from 'src/app/components/service/log-in.service';
import { query } from './queries';

@Component({
  selector: 'app-query-status',
  templateUrl: './query-status.component.html',
  styleUrls: ['./query-status.component.css']
})
export class QueryStatusComponent implements OnInit {

  queries: query[] = [];

  driverId: number = this.login.getUser().driverId;

  constructor(public login: LogInService, public driverService: DriverService) { }

  ngOnInit(): void {
    this.getQueriesByDriver(this.driverId);
  }



  getQueriesByDriver(driverId: number) {

    this.driverService.getQueriesByDriver(driverId).subscribe(

      queries =>{

      this.queries = queries;

    },
      error => {
        console.log(error);
      }

    )

  }


}
