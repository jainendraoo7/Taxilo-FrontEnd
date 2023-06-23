import { CanActivateFn } from '@angular/router';
import { BackendService } from '../backend.service';
import { LogInService } from '../log-in.service';



export const adminGuard : CanActivateFn = (route, state) => {
   
  return true;
};
