import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { BackendService } from 'src/app/components/service/backend.service';
import { DriverService } from 'src/app/components/service/DriverService/driver.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit{


  constructor(public driver: DriverService){}

  ngOnInit(): void {

  }

  
  

}
