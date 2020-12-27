import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies:Movie[]=[];
  @Output() selectedMovie = new EventEmitter()


  constructor() { }

  ngOnInit(){    
  }

  movieClicked(item:Movie){
    this.selectedMovie.emit(item)    
  }

}
