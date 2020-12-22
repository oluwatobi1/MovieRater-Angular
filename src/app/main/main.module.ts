import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {path:'movies', component:MainComponent}
]

@NgModule({
  declarations: [MainComponent],
  imports: [RouterModule.forChild(routes)  ],
  exports:[RouterModule]
})
export class MainModule { }
