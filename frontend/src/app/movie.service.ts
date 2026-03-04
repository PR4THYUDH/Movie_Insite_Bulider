import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Movie } from './movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getMovie(id: string) {
    return this.http.get<any>(`http://13.63.45.48:5000/movie/${id}`);
  }

}