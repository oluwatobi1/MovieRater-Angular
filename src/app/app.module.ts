import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PeopleService } from './people.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component'


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
       

  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
