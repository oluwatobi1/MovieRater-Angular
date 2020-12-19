import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularTemplate';
  counter=1
  people = [
    {name:"Jannet", age:15},
    {name:"Raamon", age:14},
    {name:"slamon", age:24},
    
  ];
  mycolor = 'purple';


  addCount=()=>{
    this.counter++;
  }
  add = function(){
    this.counter=this.counter+2;
  }
  ngOnInit(){
    console.log("Instantiated");
    
  }
  
}
