import { Component, OnInit } from '@angular/core';
import { CabService } from 'src/app/components/service/CabService/cab.service';
import { Cab } from '../Cab';

@Component({
  selector: 'app-all-cabs',
  templateUrl: './all-cabs.component.html',
  styleUrls: ['./all-cabs.component.css']
})
export class AllCabsComponent implements OnInit {

 
   cabs: Cab[] = [];
  constructor(public cabService: CabService){}

  ngOnInit(): void {
      this.getAllCabs();
  }

  getAllCabs(){

    this.cabService.getAllCabs().subscribe(

      cabs => {
         this.cabs = cabs;
         console.log(cabs);
         
      },
      error => {
        console.log(error);
        
      }


    )

  }


    deleteCab(cabId: number){

       this.cabService.deleteCab(cabId).subscribe(

        response => {
          console.log(response);
          
        },
        error => {
          console.log(error);
        }

       )

    }


    cabDetails(cabNumber: string){

      this.cabService.getCabDetail(cabNumber).subscribe(

        (data:any) =>{
           
            localStorage.setItem("cab-details", JSON.stringify(data));
            
            window.location.href="/cabDetails";
            
        },
        error => {
          console.log(error);
          
        }


      )

    }
   


}
