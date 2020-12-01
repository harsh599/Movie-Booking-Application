import { Component, OnInit, Input } from '@angular/core';
import { MovieDetails } from '../movie-interface';

@Component({
  selector: 'app-toprated-movie',
  templateUrl: './toprated-movie.component.html',
  styleUrls: ['./toprated-movie.component.css']
})

export class TopratedMovieComponent implements OnInit {

  constructor() { }

  @Input() movie: MovieDetails;

  ngOnInit(): void {
  }

}
