import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';

interface TokenObj{
  token:string
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  registerMode = false;
  

  constructor(
    private apiService:ApiService,
    private cookieService:CookieService,
    private router:Router
  ) { }

  ngOnInit() {
    const token = this.cookieService.get('mr-token')
    if (token){
      this.router.navigate(["movies/"])
    }
  }


  saveForm(){
    if (!this.registerMode){
      this.loginUser()
    }
    else{      
      this.apiService.registerUser(this.authForm.value).subscribe(
        result=>{
          // Login user after register
          this.loginUser()
        },
        error=>console.log(error),
      )
    }    
  }

  
  loginUser(){
    this.apiService.loginUser(this.authForm.value).subscribe(
      (result:TokenObj)=>{this.cookieService.set("mr-token", result.token)
      this.router.navigate(["movies/"])},
      error=>console.log(error)
    )
  }

}
