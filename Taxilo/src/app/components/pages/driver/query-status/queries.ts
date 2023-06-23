import { Cab } from "../../admin/drivers/cabs";
import { Driver } from "../../admin/drivers/driver";

export class query {

    queryId: number = 0;
    subject: string = "";
    queryMessage: string = "";
    resolved: boolean=false;
    driver: Driver  = new Driver();

}