import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList = [];

  constructor(private apiService:ApiService) { }

  ngOnInit(){
    this.movieList = this.apiService.getMovieList()
  }

}
