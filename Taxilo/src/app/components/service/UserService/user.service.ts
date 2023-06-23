import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { LogInService } from '../log-in.service';
import { Users } from '../../pages/admin/users/users';
import { Observable } from 'rxjs';
import { CabBooking } from '../../pages/admin/cab-booking/CabBookin';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  private baseurl: string = "https://faithful-soda-production.up.railway.app";

  constructor(private http: HttpClient) { }


  ngOnInit(): void {

  }

  DeleteUser(customerId: number) {

    return this.http.delete(`${this.baseurl}/user/delete/${customerId}`)

  }

  UpdateUser(customerId: number, UserData: any) {

    return this.http.put(`${this.baseurl}/user/update/${customerId}`, UserData);

  }

  // trip related ******************************************************************************

  TripBooking(customerId: number, TripData: any) {

    return this.http.post(`${this.baseurl}/trip/book/${customerId}`, TripData);

  }

  currentTrip(tripBookingId: number) {

    return this.http.get(`${this.baseurl}/trip/getTripByBookingId/${tripBookingId}`);

  }

  updateTrip(tripBookingId: number, tripData:any){

    return this.http.put(`${this.baseurl}/trip/update/${tripBookingId}`, tripData);

  }

   cancelBooking(tripBookingId: number){

    return this.http.put(`${this.baseurl}/trip/cancel/${tripBookingId}`, null);

   }

  payTripBill(tripBookingId: number){

    return this.http.put(`${this.baseurl}/trip/payBill/${tripBookingId}`, null);

  }

   allTripsByUser(customerId: number): Observable<CabBooking[]>{

    return this.http.get<CabBooking[]>(`${this.baseurl}/trip/getTripByCustomerId/${customerId}`)

   }

   allTripsForAdmin(): Observable<CabBooking[]>{

    return this.http.get<CabBooking[]>(`${this.baseurl}/trip/getAllTrips`);

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


 public getTripDetailBooking(){

  let Trip = localStorage.getItem("tripDetails");

  if (Trip != null) {
   return JSON.parse(Trip);
 }

 else {
   return null;
 }

}



}
