import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  @Input() movie;

  constructor() { }

  ngOnInit(): void {
  }

}
