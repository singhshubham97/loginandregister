import { Component, OnInit } from '@angular/core';
import { RegistrationLoginService } from '../registration-login.service';
import { User } from '../user';

@Component({
  selector: 'app-secured-page',
  templateUrl: './secured-page.component.html',
  styleUrls: ['./secured-page.component.css']
})
export class SecuredPageComponent implements OnInit {

  userlist: User[];
  constructor(private _service: RegistrationLoginService) { }

  ngOnInit(): void {
    this._service.getSensitiveData().subscribe(
      data=>{ 
        //console.log("response received")
        this.userlist = data;
      
      }, 
       error=>{
        console.log("could not get sensitive data");
      }
    );
  }
  
}
