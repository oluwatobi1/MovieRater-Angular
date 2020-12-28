import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies: Movie[] = [];
  @Output() selectedMovie = new EventEmitter()
  @Output() editedMovie = new EventEmitter()
  @Output() createNewMovie = new EventEmitter()
  @Output() deletedMovie = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }

  movieClicked(item: Movie) {
    this.selectedMovie.emit(item)
  }
  editMovie(movie: Movie) {
    this.editedMovie.emit(movie)
  }
  newMovie() {
    this.createNewMovie.emit()
  }
  deleteMovie(movie: Movie) {
    this.deletedMovie.emit(movie)
  }

}
