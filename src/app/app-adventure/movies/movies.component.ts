import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Subscription, forkJoin } from 'rxjs';
import { MovieDetails } from './movie-interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  allMovies: MovieDetails[] = [];
  allUpcomingMovies: MovieDetails[] = [];
  startDate: string;
  endDate: string;
  movieSubscription: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.movieSubscription = forkJoin(
      this.apiService.getTopRatedMovies(),
      this.apiService.getUpcomingMovies(),
    ).subscribe(
      (response) => {
        this.allMovies = response[0] ?.results;
        this.allUpcomingMovies = response[1] ?.results;
        this.startDate = response[1] ?.dates ?.maximum;
        this.endDate = response[1] ?.dates ?.minimum;
      }
    );
  }

  ngOnDestroy() {
    if (this.movieSubscription) {
      this.movieSubscription.unsubscribe();
    }
  }

}
