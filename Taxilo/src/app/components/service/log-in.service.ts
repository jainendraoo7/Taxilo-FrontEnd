import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private baseurl: string = "https://faithful-soda-production.up.railway.app"

  constructor(private http: HttpClient) { }





  LoginData(logIn: any) {

    return this.http.post(`${this.baseurl}/signIn`, logIn);

  }

  // current user details
  public getCurrentUser() {

    return this.http.get(`${this.baseurl}/current-user`)

  }

  // current sriver details
  public getCurrentDriver(){

    return this.http.get(`${this.baseurl}/current-users`)

  }


  public logInUser(jwtToken: any) {

    localStorage.setItem('token', jwtToken);
    return true;

  }

  public isLoggedIn() {

    let tokenStr = localStorage.getItem("token");

    if (tokenStr == undefined || tokenStr == null || tokenStr == "") {
      return false;
    }
    else {
      return true;
    }
  }


  public logOut() {

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;

  }


  // get token
  public getToken() {

    return localStorage.getItem("token");

  }

  // set user
  public setUser(user: any) {

    localStorage.setItem("user", JSON.stringify(user));

  }

  // set Driver
  // public setDriver(driver: any){

  //   localStorage.setItem("currentDriver", JSON.stringify(driver));

  // }

  // get user
  public getUser() {

    let userStr = localStorage.getItem("user");

    if (userStr != null) {
      return JSON.parse(userStr);
    }

    else {
      this.logOut();
      return null;
    }

  }



  public getUserRole() {

    let user = this.getUser();

    return user.role;

  }


  


}
