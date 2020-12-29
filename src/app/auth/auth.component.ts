import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(
    private apiService:ApiService,
    private cookieService:CookieService
  ) { }

  ngOnInit(): void {
  }
  saveForm(){
    this.apiService.loginUser(this.authForm.value).subscribe(
      (result:TokenObj)=>{this.cookieService.set("mr-cookie", result.token)},
      error=>console.log(error)
    )
  }

}
