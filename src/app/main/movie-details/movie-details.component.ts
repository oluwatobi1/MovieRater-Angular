import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() currentMovie: Movie;
  @Output() updatedMovie = new EventEmitter();

  movieHovered: number = 0;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  
  movieHover(rate: number) {
    this.movieHovered = rate;
  }


  rateClicked(rate: number) {
    console.log(rate);
    this.apiService.rateMovie(rate, this.currentMovie.id).subscribe(
      result => this.updateMovieDetails(),
      error => { console.log(error) }
    )
  }


  updateMovieDetails() {
    this.apiService.getMovie(this.currentMovie.id).subscribe(
      (data: Movie) => this.updatedMovie.emit(data),
      error => console.log(error)

    )
  }
}
