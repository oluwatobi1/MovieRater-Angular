import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTemplate';
  counter=1
  addCount=(evt)=>{
    this.counter++;
  }
  add = function(){
    this.counter=this.counter+2;
  }
}
