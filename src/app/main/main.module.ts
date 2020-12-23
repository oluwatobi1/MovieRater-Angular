import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes=[
  {path:'movies', component:MainComponent}
]

@NgModule({
  declarations: [MainComponent, MovieListComponent, MovieDetailsComponent],
  imports: [RouterModule.forChild(routes)  ],
  exports:[RouterModule]
})
export class MainModule { }
