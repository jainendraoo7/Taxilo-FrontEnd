import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  data = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    license: ""
  }


  ngOnInit(): void { }

  constructor(private driver: BackendService, private snack: MatSnackBar, private router: Router) {

  }

  doSubmitForm() {

    console.log("try to submit form");

    if (this.data.email == "" || this.data.name == "" || this.data.password == "" || this.data.license == "" || this.data.mobile == "") {

      this.snack.open("fields should not be empty", "ok");
      return;

    }

    this.driver.sendData(this.data).subscribe(

      response => {
        console.log(response);
        Swal.fire("Success", this.data.name+" Is Registerd", "success");
        
        this.router.navigateByUrl('/driverLogIn');

      },
      error => {
        console.log(error);
        alert("Somethig Went Wrong")
      }

    )


  }

}
