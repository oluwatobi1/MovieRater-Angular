import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { ApiService } from './api.service';

const routes: Routes=[
  {path:'', pathMatch:'full', redirectTo:'movies'}
];


@NgModule({ 
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    MainModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports:[RouterModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  }
 
