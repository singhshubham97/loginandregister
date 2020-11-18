import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { RegistrationLoginService } from '../registration-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user =new User();
loginForm:FormGroup;
hide =true;
msg="";

  constructor(private formBuilder: FormBuilder
    ,private _service:RegistrationLoginService, private _router:Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'emailId' : [this.user.emailid, [Validators.required,Validators.email]],
      'password' : [this.user.password,[Validators.required,Validators.minLength(6),Validators.maxLength(30)]]
    });
  }
  onLoginSubmit(){
    //alert(this.user.emailId +' '+this.user.password);
    this._service.loginUserFromRemote(this.user).subscribe(
      data=>{ 
        //console.log("response received")
        this.msg = "login successful";
        this._router.navigate(['dashboard']);
      }, 
       error=>{
        //console.log("exception occured");
        this.msg="Bad credentials, please enter valid email id and password";
      }
    );

  }
}
