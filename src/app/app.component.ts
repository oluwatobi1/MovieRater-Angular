import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTemplate';
  counter=1
  people = [
    {name:"Jannet", age:15},
    {name:"Raamon", age:14},
    {name:"slamon", age:24},
    
  ];


  addCount=()=>{
    this.counter++;
  }
  add = function(){
    this.counter=this.counter+2;
  }
}
