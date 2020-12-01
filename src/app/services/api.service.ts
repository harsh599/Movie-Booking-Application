import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopRatedMovieResponse, UpcomingMovieResponse } from '../app-adventure/movies/movie-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly MOVIE_BASE_URL = "https://api.themoviedb.org/3/movie";
  readonly API_KEY = "a7df97f5079b9f4b946abe877663da45";

  constructor(private http: HttpClient) {
    }

    getTopRatedMovies() : Observable<TopRatedMovieResponse>{
      return this.http.get<TopRatedMovieResponse>(this.MOVIE_BASE_URL + "/top_rated?api_key="+this.API_KEY);
    }

    getUpcomingMovies() : Observable<UpcomingMovieResponse>{
      return this.http.get<UpcomingMovieResponse>(this.MOVIE_BASE_URL + "/upcoming?api_key="+this.API_KEY);
    }
}
