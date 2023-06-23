import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogInService } from 'src/app/components/service/log-in.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private login: LogInService){}

  ngOnInit(): void {
    
    

  }

  isAdminUser(): boolean {
   
    if(this.login.getUserRole()=='ADMIN'){
      return true
    }
    else{

    return false;
  }

  
}

}
