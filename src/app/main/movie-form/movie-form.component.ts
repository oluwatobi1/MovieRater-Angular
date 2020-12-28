import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Movie } from 'src/app/models/Movie';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @Output() movieList=new EventEmitter();

  movieForm;
  @Input() set movie(val:Movie){
    this.movieForm = new FormGroup({
      title: new FormControl(val.title),
      description: new FormControl(val.description)
    })
  };

  constructor(
    private apiService:ApiService
  ) { }

  ngOnInit(): void {
  }

  saveForm(){
    this.apiService.createMovie(this.movieForm.value.title, this.movieForm.value.description).subscribe(
      result=>{        
        this.apiService.getMovieList().subscribe(
          result=>{
            this.movieList.emit(result)
          },
          error=>console.log(error, "on fetch")
          ,
        )
      },
      error=>console.log(error)
    )
  }

}
