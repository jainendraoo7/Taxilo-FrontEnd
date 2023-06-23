import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cab } from '../../pages/admin/drivers/cabs';


@Injectable({
  providedIn: 'root'
})
export class CabService {

  constructor(private http: HttpClient) { }

  private baseurl: string = "https://faithful-soda-production.up.railway.app"


  registerCab(cabData: any) {

    return this.http.post(`${this.baseurl}/cab/register`, cabData);

  }

  deleteCab(cabId: number) {
    return this.http.delete(`${this.baseurl}/cab/delete/${cabId}`);
  }


  getAllCabs(): Observable<Cab[]> {

    return this.http.get<Cab[]>(`${this.baseurl}/cab/getAll`);

  }

  getCabDetail(cabNumber: string) {
    return this.http.get(`${this.baseurl}/cab/getCab/${cabNumber}`);
  }



  public getCab(){

    let cabStr = localStorage.getItem("cab-details");

    if(cabStr!=null){
      return JSON.parse(cabStr);
    }
    else return null;

  }

}
