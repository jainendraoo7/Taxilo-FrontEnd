import { Component,OnInit } from '@angular/core';
import { query } from '../../driver/query-status/queries';
import { DriverService } from 'src/app/components/service/DriverService/driver.service';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {

  queries: query[] = [];

  constructor(private driverService: DriverService){}

  ngOnInit(): void {
      this.getAllQueries();
  }

  getAllQueries(){

     this.driverService.getAllQueries().subscribe(

      queries =>{
        this.queries = queries;
        console.log(queries);
        
      },
      error => {
        console.log(error);
      }

     )

   }


   queryDetails(queryId: number){

    this.driverService.getQueryById(queryId).subscribe(

    (data: any) =>{

      console.log(data);
      localStorage.setItem("query", JSON.stringify(data));
      window.location.href="/checkQuery";
    },
    error =>{
      console.log(error);
    }

    )

   }

   
  

}
