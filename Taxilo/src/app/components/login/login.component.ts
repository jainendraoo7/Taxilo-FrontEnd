import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LogInService } from '../service/log-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logIn = {

    email: "",
    password: ""

  }

  ngOnInit(): void {

  }

  constructor(private backEnd: LogInService, private router: Router) { }

  doSubmitlogin() {
    console.log("try to login")

    this.backEnd.LoginData(this.logIn).subscribe(

      (data: any) => {
        console.log(data);

        Swal.fire("Success", this.logIn.email + " Is Logged In", "success");

        this.backEnd.logInUser(data.jwtToken);

        this.backEnd.getCurrentUser().subscribe(

          (user: any) => {

            this.backEnd.setUser(user);
            console.log(user);

            if (this.backEnd.getUserRole() == "ADMIN") {

              window.location.href = "/admin"

            }
            else if (this.backEnd.getUserRole() == "USER") {

              window.location.href = "/admin"

            }
            else if(this.backEnd.getUserRole()=="DRIVER"){

              window.location.href="/driver"

            }
            else {
              this.backEnd.logOut();
              // location.reload;
            }

          },

          error => {
            console.log(error);

          }
        )
      },
      error => {

        console.log(error);
        alert("Something Went Wrong");

      }

    )

  }

}
