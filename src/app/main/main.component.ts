import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { Movie } from '../models/Movie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  movie: Movie[] = [];
  selectMovie = null;
  editedMovie = null;

  constructor(
    private apiService: ApiService,
    private cookieService:CookieService,
    private router:Router
    ) { }

  ngOnInit() {
    const token = this.cookieService.get('mr-token')
    if (!token){
        this.router.navigate(['auth/'])
    } else {
      this.apiService.getMovieList().subscribe(
        (data: Movie[]) => {
          this.movie = data;  
        },
        error => console.log(error)
  
      )
  
    }

      }
  getSelectedMovie(movie: Movie) {
    this.selectMovie = movie
    this.editedMovie = null
  }
  editMovie(movie: Movie) {
    this.editedMovie = movie
    this.selectMovie = null
  }
  newMovie() {
    this.editedMovie = { title: '', description: '' }
    this.selectMovie = null
  }
  deleteMovie(movie: Movie) {
    // delete selected movie here
    console.log(movie.title, "::::delete")
    this.apiService.deleteMovie(movie.id).subscribe(
      data => {
        this.movie = this.movie.filter(mov => mov.id !== movie.id)
      },
      error => console.log(error),
    )
  }
  updatedMovieList(movie: Movie[]) {
    this.movie = movie
  }
  createMovie(movie) {
    // add to movielist
    this.movie.push(movie)
    this.editedMovie = null;
  }
  updateMovie(movie) {
    // update movie list
    const movieIndex = this.movie.findIndex(mov => mov.id === movie.id)
    if (movieIndex >= 0) {
      this.movie[movieIndex] = movie
      this.editedMovie = null;
    }
  }

}
