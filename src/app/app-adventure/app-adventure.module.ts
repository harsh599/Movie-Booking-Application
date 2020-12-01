import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAdventureRoutingModule } from './app-adventure-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { UpcomingMovieComponent } from './movies/upcoming-movie/upcoming-movie.component';
import { TopratedMovieComponent } from './movies/toprated-movie/toprated-movie.component';


@NgModule({
  declarations: [MoviesComponent, UpcomingMovieComponent, TopratedMovieComponent],
  imports: [
    CommonModule,
    AppAdventureRoutingModule
  ]
})
export class AppAdventureModule { }
