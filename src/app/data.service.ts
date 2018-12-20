import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrendingMovies } from './trending-movies';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public moviesTrending_Url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=10472e5b920186c224c45d801066d9aa';
  public tvTrending_Url = 'https://api.themoviedb.org/3/trending/tv/week?api_key=10472e5b920186c224c45d801066d9aa';


  constructor(private http: HttpClient) { }

  // Receive Observable and cast into trending
  getTrendingMovies(): Observable<TrendingMovies[]> {
     return this.http.get<TrendingMovies[]>(this.moviesTrending_Url);

     
    // const url = `${this.moviesTrending_Url}/`;
    // return this.http.get(url).pipe(
    //     map((data: any[]) => data.map((movie: TrendingMovies) => new TrendingMovies(
          
    //     ))),
    //   );


  }

  getTrendingTvShows(): Observable<any> {
    return this.http.get(this.tvTrending_Url);
  }
}

// going to be working on how to only call api here and use api data inside relevant component
