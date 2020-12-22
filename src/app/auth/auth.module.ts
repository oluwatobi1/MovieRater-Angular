import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'auth', component:AuthComponent}
]


@NgModule({
  declarations: [AuthComponent],
  imports: [RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AuthModule { }
