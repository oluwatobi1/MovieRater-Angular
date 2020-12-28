import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Movie } from './models/Movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURl = 'http://127.0.0.1:8000/api/movie/'
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: "Token 7328354ff2b80d0e9d4bb3b50f0e49fe3820e349"
  })

  constructor(
    private httpClient:HttpClient
  ) { }

  getMovieList(){
    return this.httpClient.get<Movie[]>(this.baseURl, {headers:this.headers})
  }

  rateMovie(rate, movieid){
    const body = JSON.stringify({'stars':rate})
    return this.httpClient.post(`${this.baseURl}${movieid}/rate_movie/`, body, {headers:this.headers})
  }

  getMovie(movieid:number){
    return this.httpClient.get<Movie>(`${this.baseURl}${movieid}`, {headers:this.headers})
  }

  createMovie(title:string, description:string){
    const body = JSON.stringify({title:title, description:description})
    return this.httpClient.post(this.baseURl, body, {headers:this.headers})
  }
}
