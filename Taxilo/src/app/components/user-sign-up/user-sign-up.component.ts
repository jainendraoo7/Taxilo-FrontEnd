import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackendService } from '../service/backend.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  userData = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    role: ""
  }



  ngOnInit(): void {

  }

  constructor(private snack: MatSnackBar, private signup: BackendService, private router: Router) { }

  doSubmit() {

    console.log("user try to login");

    if (this.userData.email == "" || this.userData.name == "" || this.userData.password == "" || this.userData.mobile == "" || this.userData.role=="") {

      this.snack.open("fields should not be empty", "ok");
      return;

    }

    this.signup.sendUserData(this.userData).subscribe(

      response => {
        console.log(response);
        Swal.fire("Success", this.userData.name+" Is Registerd", "success");
        this.router.navigateByUrl('/login');
      },
      error => {
        console.log(error);

      }
    )
    
    
  }

}
