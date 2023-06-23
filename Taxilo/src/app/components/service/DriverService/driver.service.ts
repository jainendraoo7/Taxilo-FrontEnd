import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { query } from '../../pages/driver/query-status/queries';
import { Observable } from 'rxjs';
import { CabBooking } from '../../pages/admin/cab-booking/CabBookin';

@Injectable({
  providedIn: 'root'
})
export class DriverService implements OnInit {

  constructor(private http: HttpClient) { }

  private baseurl: string = "https://faithful-soda-production.up.railway.app"

  ngOnInit(): void {

  }

  DeleteDriver(driverId: number) {

    return this.http.delete(`${this.baseurl}/driver/delete/${driverId}`);

  }

  GetDriverById(driverId: number) {

    return this.http.get(`${this.baseurl}/driver/getDriver/${driverId}`);

  }

    updateUsernamePassword(driverId: number, updateData: any){

      return this.http.put(`${this.baseurl}/driver/update/${driverId}`, updateData);

    }


  AssignCab(driverId: number, cabId: number) {

    return this.http.put(`${this.baseurl}/driver/assign/${driverId}/${cabId}`, null);

  }


  AssignDriverToTrip(tripBookingId: number) {

    return this.http.put(`${this.baseurl}/trip/assign/${tripBookingId}`, null);

  }

  //  Query*************

  createQuery(driverId: number, query: any) {

    return this.http.post(`${this.baseurl}/query/create/${driverId}`, query);

  }

  getQueriesByDriver(driverId: number): Observable<query[]> {

    return this.http.get<query[]>(`${this.baseurl}/query/getAllByDriver/${driverId}`);

  }


  getAllQueries(): Observable<query[]> {

    return this.http.get<query[]>(`${this.baseurl}/query/getAll`);

  }

  getQueryById(queryId: number) {

    return this.http.get(`${this.baseurl}/query/getQuery/${queryId}`);

  }

  changeQueryStatus(queryId: number) {
    return this.http.put(`${this.baseurl}/query/changeStatus/${queryId}`, null);
  }


  // Trip **********************************************************

   allTripsOfDriver(driverId: number): Observable<CabBooking[]>{
   
    return this.http.get<CabBooking[]>(`${this.baseurl}/trip/getTripByDriverId/${driverId}`);

   }

   setAvailable(driverId: number){

    return this.http.put(`${this.baseurl}/driver/avail/${driverId}`, null);

   }

   setNotAvailable(driverId: number){

    return this.http.put(`${this.baseurl}/driver/disavail/${driverId}`, null);

   }

  public getDriver() {

    let userStr = localStorage.getItem("driver");

    if (userStr != null) {
      return JSON.parse(userStr);
    }

    else {
      return null;
    }

  }

  public getQuery() {

    let queryStr = localStorage.getItem("query");

    if (queryStr != null) {
      return JSON.parse(queryStr);
    }

    else {
      return null;
    }

  }

  public getCurrentBooking(){

     let booking = localStorage.getItem("current-booking");

     if (booking != null) {
      return JSON.parse(booking);
    }

    else {
      return null;
    }

  }

}
