import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/components/service/DriverService/driver.service';

@Component({
  selector: 'app-assign-cab',
  templateUrl: './assign-cab.component.html',
  styleUrls: ['./assign-cab.component.css']
})
export class AssignCabComponent implements OnInit {

  assignData = {
      
    driverId: 0,
    cabId: 0,
    
  }

  constructor(private driverService: DriverService){}

  ngOnInit(): void {
      
  }

  doAssign(){
    
    this.driverService.AssignCab(this.assignData.driverId,this.assignData.cabId).subscribe(

     response => {
      console.log(response);
      window.location.href="/admin/drivers"
     },
     error => {
        console.log(error);
     }

    )

  }

}
