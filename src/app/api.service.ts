import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private films = ["Vikings", "Infinity Wars", "Django"]

  constructor() { }

  getMovieList(){
    return this.films
  }
}
