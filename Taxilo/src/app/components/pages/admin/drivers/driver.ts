import { Cab } from "./cabs";

export class Driver {
  driverId: number = 0;
  name: string = "";
  email: string = "";
  mobile: string = "";
  license: string = "";
  // cab: Cab = {
  //   cabId: 0,
  //   cabName: "",
  //   cabNumber: "",
  //   cabType: ""
  // }
   cab: Cab = new Cab();
}

