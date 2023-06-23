import { Cab } from "../drivers/cabs";
import { Driver } from "../drivers/driver";
import { Users } from "../users/users";



const date = new Date();
const formattedDate = date.toISOString().split('T')[0];

export class CabBooking {

    tripBookingId: number  = 0;
    fromLocation: string = "";
    toLocation: string = "";
    fromDateTime: string = formattedDate;
    toDateTime: string = formattedDate;
    distanceInKm: number = 0.0;
    billStatus: number = 0.0;
    status: boolean = false;
    driver: Driver = new Driver();
    customer: Users = new Users();
} 