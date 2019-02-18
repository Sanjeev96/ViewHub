import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // home Tab
  public moviesTrending_ByDay_Url =
    'https://api.themoviedb.org/3/trending/movie/day?api_key=10472e5b920186c224c45d801066d9aa';
    public moviesTrending_ByWeek_Url =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=10472e5b920186c224c45d801066d9aa';


  public tvTrending_ByDay_Url =
    'https://api.themoviedb.org/3/trending/tv/day?api_key=10472e5b920186c224c45d801066d9aa';
  public tvTrending_ByWeek_Url =
    'https://api.themoviedb.org/3/trending/tv/week?api_key=10472e5b920186c224c45d801066d9aa';

  // Movies Tab
  public popularMovies_Url =
    'https://api.themoviedb.org/3/movie/popular?api_key=10472e5b920186c224c45d801066d9aa&language=en-US&page=1';
  public nowPlayingMovies_Url =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=10472e5b920186c224c45d801066d9aa&language=en-US&page=1&region=GB';
  public topRatedMovies_Url =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=10472e5b920186c224c45d801066d9aa&language=en-US&page=1&region=GB';
  public upcomingMovies_Url =
    'https://api.themoviedb.org/3/movie/upcoming?api_key=10472e5b920186c224c45d801066d9aa&language=en-US&page=1';

  public popularTvShows_Url =
    'https://api.themoviedb.org/3/tv/popular?api_key=10472e5b920186c224c45d801066d9aa&language=en-US&page=1';

  constructor(private http: HttpClient) {}

  // Home Tab
  getTrendingMoviesbyWeekURL() {
    return this.http.get(this.moviesTrending_ByWeek_Url);
  }
  getTrendingMoviesbyDayURL() {
    return this.http.get(this.moviesTrending_ByDay_Url);
  }

  getTrendingTvShowsbyWeekURL() {
    return this.http.get(this.tvTrending_ByWeek_Url);
  }
  getTrendingTvShowsbyDayURL() {
    return this.http.get(this.tvTrending_ByDay_Url);
  }

// Movies Tab
  getPopularMoviesURL() {
    return this.http.get(this.popularMovies_Url);
  }
  getNowPlayingMoviesURL() {
    return this.http.get(this.nowPlayingMovies_Url);
  }
  getTopRatedMoviesURL() {
    return this.http.get(this.topRatedMovies_Url);
  }
getUpcomingMoviesURL() {
  return this.http.get(this.upcomingMovies_Url);
}


// Tv Shows Tab
  getPopularTvShowsURL() {
    return this.http.get(this.popularTvShows_Url);
  }

}
