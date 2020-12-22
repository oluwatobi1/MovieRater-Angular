import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularTemplate';
  counter=1
  mycolor = 'grey';
  people = [];
  today = new Date;
  money = 69;
  
  constructor(){}
  addCount=()=>{
    this.counter++;
  }
  add = function(){
    this.counter=this.counter+2;
  }
  ngOnInit(){

  }

  
}
