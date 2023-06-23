import { Component,OnInit } from '@angular/core';
import { LogInService } from 'src/app/components/service/log-in.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  constructor(public login: LogInService){}

  ngOnInit(): void {
      
  }
  

}
