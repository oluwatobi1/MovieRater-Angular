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
  editedMovie = null;

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
    this.editedMovie = null  
  }
  editMovie(movie:Movie){
      this.editedMovie = movie
      this.selectMovie = null
  }
  newMovie(){
    this.editedMovie = {title:'', description:''}
      this.selectMovie = null
  }
  deleteMovie(movie:Movie){
    // delete selected movie here
    console.log(movie.title, "::::delete")
  }

}
