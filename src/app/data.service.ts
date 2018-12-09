import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITrendingMovies } from './trending-movies';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private httpClient: HttpClient) { }

  // Receive Observable and cast into trending
  getTrendingMovies(): Observable<ITrendingMovies[]>  {
    return this.httpClient.get<ITrendingMovies[]>
    ('https://api.themoviedb.org/3/trending/movie/week?api_key=10472e5b920186c224c45d801066d9aa');



      // .subscribe(
      //   (data: any[]) => {
      //     console.log(data);
      //   }
      // );
  }

  getTrendingTvShows() {
return this.httpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=10472e5b920186c224c45d801066d9aa');
  }
}

// going to be working on how to only call api here and use api data inside relevant component
