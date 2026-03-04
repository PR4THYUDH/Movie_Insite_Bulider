import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  movieId = "";
  movie?: Movie;
  loading = false;
  errorMessage = ""

  constructor(private movieService : MovieService) {}

  searchMovie() {

    this.loading = true
    this.errorMessage = ""
    this.movie = undefined

    this.movieService.getMovie(this.movieId)
    .subscribe({

      next: (data: any) => {
        this.movie = data
        this.loading = false
      },

      error: (err) => {
        this.loading = false
        this.errorMessage = "Movie not found. Please enter a valid IMDb ID."
      }

    })

  }
}
