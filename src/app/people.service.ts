import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  
  people = [
    {name:"Jannet", age:15},
    {name:"Jose", age:59},
    {name:"Raamon", age:14},
    {name:"slamon", age:24},
    
  ];

  constructor() { }
  allpeople(){
    return this.people
  }
  arrowpeople = ()=>{
    return this.people
  }
}
