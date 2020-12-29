import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
  {path:'auth', component:AuthComponent}
]


@NgModule({
  declarations: [AuthComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule, 
    CommonModule
  ],
  exports:[RouterModule]
})
export class AuthModule { }
