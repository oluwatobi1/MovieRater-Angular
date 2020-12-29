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

  @Output() createdMovie = new EventEmitter();
  @Output() updatedMovie = new EventEmitter();

  movieForm;
  id: number;

  @Input() set movie(val: Movie) {
    this.id = val.id,
      this.movieForm = new FormGroup({
        title: new FormControl(val.title),
        description: new FormControl(val.description)
      })
  };

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  formDisable() {
    if (this.movieForm.value.title.length &&
      this.movieForm.value.description.length) {
      return false
    } else {
      return true
    }
  }

  saveForm() {
    if (this.id) {
      this.apiService.updateMovie(this.id, this.movieForm.value.title, this.movieForm.value.description).subscribe(
        result => {
          this.updatedMovie.emit(result)
        },
        error => console.log(error)
      )
    } else {

      this.apiService.createMovie(this.movieForm.value.title, this.movieForm.value.description).subscribe(
        result => {
          this.createdMovie.emit(result)
        },
        error => console.log(error)
      )
    }
  }
}
