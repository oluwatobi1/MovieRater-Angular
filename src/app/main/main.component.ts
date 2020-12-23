import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  movie : any=[];
  

  constructor(private apiService:ApiService) { }

  ngOnInit(){    
    this.apiService.getMovieList().subscribe(
      data=>{
        this.movie = data;
        console.log(this.movie, 'data');
        
      }, 
      error=> console.log(error)

      
    )
    
  }

}
