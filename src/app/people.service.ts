import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  anObservable$ = new Observable( observer =>{
    observer.next('HEllo from the other angle')
  })
  
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
