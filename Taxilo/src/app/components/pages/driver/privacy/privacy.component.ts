import { Component,OnInit } from '@angular/core';
import { DriverService } from 'src/app/components/service/DriverService/driver.service';
import { LogInService } from 'src/app/components/service/log-in.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  updateData = {
    email: "",
    password: "",

  }

  constructor(private driver: DriverService, public login: LogInService){}

  ngOnInit(): void {}

  updateEmailPassword(driverId: number){
    
    this.driver.updateUsernamePassword(driverId, this.updateData).subscribe(

     response => {
      console.log(response);
      console.log(driverId);
      
     },
     error => {
      console.log(error);
      
     }

    )

  }
  

}
