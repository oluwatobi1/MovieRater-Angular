import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies=[];
  @Output() selectedMovie = new EventEmitter()


  constructor() { }

  ngOnInit(){    
  }

  movieClicked(item){
    this.selectedMovie.emit(item)    
  }

}
