import { Component } from '@angular/core';
import { LogInService } from '../service/log-in.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user = null;

  constructor(public login: LogInService) { }

  ngOnInit(): void {

    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();

  }

  isUserDriver(): boolean {
    if (this.login.getUserRole() == "DRIVER") {
      return true;
    }
    else {
      return false;
    }

  }


  checkUser() {

    if (this.login.getUserRole() == "DRIVER") {

      window.location.href = "/driver/driverProfile"

    }

    else if (this.login.getUserRole() == "ADMIN" || this.login.getUserRole() == "USER") {

      window.location.href = "/admin/profile"

    }

  }

  isUser(): boolean {

    if (this.login.getUserRole() == "USER") {
      return true;
    }

    else
      return false;
  }

  isAdmin(): boolean {

    if (this.login.getUserRole() == "ADMIN") {
      return true;
    }

    else
      return false;
  }

  logout() {

    this.login.logOut();
    window.location.reload();
    this.isLoggedIn = false;
    this.user = null;

  }

}
