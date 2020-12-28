import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models/Movie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  movie : Movie[]=[];
  selectMovie = null;
  EditMovie = 4;

  constructor(private apiService:ApiService) { }

  ngOnInit(){    
    this.apiService.getMovieList().subscribe(
      (data:Movie[])=>{
        this.movie = data;
        
      }, 
      error=> console.log(error)
      
    )    
  }
  getSelectedMovie(movie:Movie){
    this.selectMovie = movie    
  }

}
