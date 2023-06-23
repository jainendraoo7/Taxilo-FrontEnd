import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/components/service/DriverService/driver.service';
import { LogInService } from 'src/app/components/service/log-in.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

   queryMess = {
    subject: "",
    queryMessage: "",
   }

  constructor(public login: LogInService, private driverService: DriverService){}

  ngOnInit(): void {
      
  }

  generateQuery(driverId: number){

    this.driverService.createQuery(driverId, this.queryMess).subscribe(

     respone => {
      console.log(respone);
      
     },
     error => {
      console.log(error);
      
     }

    )
    
  }
  

}
