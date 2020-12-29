import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Movie } from './models/Movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURl = 'http://127.0.0.1:8000/'
  baseMovieUrl = `${this.baseURl}api/movie/`
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // Authorization: "Token 7328354ff2b80d0e9d4bb3b50f0e49fe3820e349"
  })

  constructor(

    private httpClient: HttpClient
  ) { }

  getMovieList() {
    return this.httpClient.get<Movie[]>(this.baseMovieUrl, { headers: this.headers })
  }

  rateMovie(rate, movieid) {
    const body = JSON.stringify({ 'stars': rate })
    return this.httpClient.post(`${this.baseMovieUrl}${movieid}/rate_movie/`, body, { headers: this.headers })
  }

  getMovie(movieid: number) {
    return this.httpClient.get<Movie>(`${this.baseMovieUrl}${movieid}`, { headers: this.headers })
  }

  createMovie(title: string, description: string) {
    const body = JSON.stringify({ title: title, description: description })
    return this.httpClient.post(this.baseMovieUrl, body, { headers: this.headers })
  }

  updateMovie(id: number, title: string, description) {
    const body = JSON.stringify({ title, description })
    return this.httpClient.put(`${this.baseMovieUrl}${id}/`, body, { headers: this.headers })
  }

  deleteMovie(id: number) {
    return this.httpClient.delete(`${this.baseMovieUrl}${id}/`, { headers: this.headers })
  }
  loginUser(Userdata){
    const body=JSON.stringify(Userdata)
    return this.httpClient.post(`${this.baseURl}auth/`, body, {headers:this.headers})
  }
}
