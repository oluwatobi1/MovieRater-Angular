import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Movie } from './models/Movie';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURl = 'http://127.0.0.1:8000/'
  baseMovieUrl = `${this.baseURl}api/movie/`

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }


  getMovieList() {
    return this.httpClient.get<Movie[]>(this.baseMovieUrl, { headers: this.getAuthHeaders() })
  }


  rateMovie(rate, movieid) {
    const body = JSON.stringify({ 'stars': rate })
    return this.httpClient.post(`${this.baseMovieUrl}${movieid}/rate_movie/`, body, { headers: this.getAuthHeaders() })
  }



  getMovie(movieid: number) {
    return this.httpClient.get<Movie>(`${this.baseMovieUrl}${movieid}`, { headers: this.getAuthHeaders() })
  }


  createMovie(title: string, description: string) {
    const body = JSON.stringify({ title: title, description: description })
    return this.httpClient.post(this.baseMovieUrl, body, { headers: this.getAuthHeaders() })
  }


  updateMovie(id: number, title: string, description) {
    const body = JSON.stringify({ title, description })
    return this.httpClient.put(`${this.baseMovieUrl}${id}/`, body, { headers: this.getAuthHeaders() })
  }

  deleteMovie(id: number) {
    return this.httpClient.delete(`${this.baseMovieUrl}${id}/`, { headers: this.getAuthHeaders() })
  }


  loginUser(Userdata) {
    const body = JSON.stringify(Userdata)
    return this.httpClient.post(`${this.baseURl}auth/`, body, { headers: this.headers })
  }


  registerUser(Userdata) {
    const body = JSON.stringify(Userdata)
    return this.httpClient.post(`${this.baseURl}api/user/`, body, { headers: this.headers })
  }


  getAuthHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${this.cookieService.get('mr-token')}`
    })
  }
}
