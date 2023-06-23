import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/components/service/DriverService/driver.service';
import { query } from '../../driver/query-status/queries';

@Component({
  selector: 'app-check-query',
  templateUrl: './check-query.component.html',
  styleUrls: ['./check-query.component.css']
})
export class CheckQueryComponent implements OnInit {

  constructor(public driverService: DriverService){}

  ngOnInit(): void {
     
  }

  changeStatus(queryId: number){

    this.driverService.changeQueryStatus(queryId).subscribe(

      response => {
        console.log(response);
        window.location.href="/admin/queries"
      },
      error => {
        console.log(error);
        
      }

    )

  }

  


}
