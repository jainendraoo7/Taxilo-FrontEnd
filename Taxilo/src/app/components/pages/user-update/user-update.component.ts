import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/UserService/user.service';
import { LogInService } from '../../service/log-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  UserData = {
    name: "",
    email: "",
    mobile: ""
  }

  constructor(private userService: UserService, public login: LogInService) { }

  ngOnInit(): void {

  }



  doSubmit(customerId: number) {



    this.userService.UpdateUser(customerId, this.UserData).subscribe(

      respone => {
        console.log(respone);
        Swal.fire("Success", this.UserData.name+" Is Updated", "success");
        this.login.logOut();
        window.location.href = "/login";
      },
      error => {
        console.log(error);

      },

    )



  }



}
