import { Component, OnInit } from '@angular/core';
import { CabService } from 'src/app/components/service/CabService/cab.service';

@Component({
  selector: 'app-cab-detail',
  templateUrl: './cab-detail.component.html',
  styleUrls: ['./cab-detail.component.css']
})
export class CabDetailComponent implements OnInit {

  constructor(public cab: CabService) { }

  ngOnInit(): void {
       console.log(this.cab.getCab());
       
  }

   
   

}
