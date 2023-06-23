import { Component, OnInit } from '@angular/core';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

import { BackendService } from '../service/backend.service';
import { Driver } from '../pages/admin/drivers/driver';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private snack: MatSnackBar, private driver: BackendService) { }

  ngOnInit(): void {

  }

  btnClick() {
    this.snack.open("welcome to signup")
  }


 


}


