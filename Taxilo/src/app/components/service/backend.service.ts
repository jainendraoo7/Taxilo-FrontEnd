import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../pages/admin/drivers/driver';
import { Users } from '../pages/admin/users/users';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseurl: string = "https://faithful-soda-production.up.railway.app"



  constructor(private http: HttpClient) { }

  sendData(data: any) {

    return this.http.post(`${this.baseurl}/driver/register`, data);

  }

  sendUserData(userData: any) {

    return this.http.post(`${this.baseurl}/user/register`, userData);

  }


  DriverData(): Observable<Driver[]> {

    return this.http.get<Driver[]>(`${this.baseurl}/driver/getAll`);

  }

  UserData(): Observable<Users[]> {

    return this.http.get<Users[]>(`${this.baseurl}/user/all`)

  }


}
