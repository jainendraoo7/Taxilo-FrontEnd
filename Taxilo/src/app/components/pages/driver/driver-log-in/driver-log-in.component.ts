import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInService } from 'src/app/components/service/log-in.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-driver-log-in',
  templateUrl: './driver-log-in.component.html',
  styleUrls: ['./driver-log-in.component.css']
})
export class DriverLogInComponent implements OnInit {

  logIn = {
    email: "",
    password: ""
  }

  constructor(private loginService: LogInService, private router: Router) { }

  ngOnInit(): void {

  }


  doSubmitlogin() {

    this.loginService.LoginData(this.logIn).subscribe(

      (data: any) => {

        console.log(data);

        Swal.fire("Success", this.logIn.email + " Is Logged In", "success");

        this.loginService.logInUser(data.jwtToken);

        this.loginService.getCurrentDriver().subscribe(

          (user: any) => {

            this.loginService.setUser(user);

            window.location.href = "/driver"

          },
          error => {
            console.log(error);

          }

        )
      },
      error => {
        console.log(error);

      }


    )

  }

}
