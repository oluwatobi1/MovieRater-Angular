import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() currentMovie;
  @Output() updatedMovie = new EventEmitter();

  movieHovered = 0;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(){
  }
  movieHover(rate){
    this.movieHovered = rate;
  }

  rateClicked(rate){
    console.log(rate);
    this.apiService.rateMovie(rate, this.currentMovie.id).subscribe(
      result =>this.updateMovieDetails(),
      error=>{console.log(error)} 
    )   
  }
  updateMovieDetails(){
    this.apiService.getMovie(this.currentMovie.id).subscribe(
      data =>this.updatedMovie.emit(data), 
      error=> console.log(error)
      
    )
  }
}
