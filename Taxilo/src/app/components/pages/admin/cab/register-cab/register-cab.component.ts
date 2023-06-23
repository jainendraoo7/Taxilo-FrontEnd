import { Component, OnInit } from '@angular/core';
import { CabService } from 'src/app/components/service/CabService/cab.service';

@Component({
  selector: 'app-register-cab',
  templateUrl: './register-cab.component.html',
  styleUrls: ['./register-cab.component.css']
})
export class RegisterCabComponent implements OnInit {

   cabData ={
    cabId: 0,
    cabName: "",
    cabNumber: "",
    cabType: "",
  }

  constructor(private cabService: CabService){}

  ngOnInit(): void {
      
  }

   registerCab(){

    this.cabService.registerCab(this.cabData).subscribe(

      response=>{
        console.log(response);
        window.location.href="/admin/cab"
      },
      error => {
        console.log(error);
      }

    )

   }

}
