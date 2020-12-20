import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularTemplate';
  counter=1
  mycolor = 'purple';
  people = [];
  today = new Date;
  money = 69;
  
  constructor(private peopleServ:PeopleService){}
  addCount=()=>{
    this.counter++;
  }
  add = function(){
    this.counter=this.counter+2;
  }
  ngOnInit(){
    this.people = this.peopleServ.arrowpeople()
    console.log("Instantiated");
    
  }
  
}
