import { NgModule, } from '@angular/core';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { MovieFormComponent } from './movie-form/movie-form.component';

const routes: Routes=[
  {path:'movies', component:MainComponent}
]

@NgModule({
  declarations: [MainComponent, MovieListComponent, MovieDetailsComponent, MovieFormComponent],
  imports: [RouterModule.forChild(routes),
     CommonModule,
    FontAwesomeModule ],
  exports:[RouterModule]
})
export class MainModule {
  constructor(library:FaIconLibrary){
    library.addIcons(faStar,  fasStar,)
  }
 }
