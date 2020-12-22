import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PeopleService } from './people.service';
import { FirstComponent } from './first/first.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
       

  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
