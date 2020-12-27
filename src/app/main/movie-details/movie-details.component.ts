import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() currentMovie;

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
      result =>{console.log(result)},
      error=>{console.log(error)} 
    )   
  }
}
