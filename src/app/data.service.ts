import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITrendingMovies } from './trending-movies';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public moviesTrending_Url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=10472e5b920186c224c45d801066d9aa';
  public tvTrending_Url = 'https://api.themoviedb.org/3/trending/tv/week?api_key=10472e5b920186c224c45d801066d9aa';


  constructor(private httpClient: HttpClient) { }

  // Receive Observable and cast into trending
  getTrendingMovies(): Observable<ITrendingMovies[]> {
    return this.httpClient.get<ITrendingMovies[]>
      (this.tvTrending_Url);


  }

  getTrendingTvShows() {
    return this.httpClient.get(this.tvTrending_Url);
  }
}

// going to be working on how to only call api here and use api data inside relevant component
