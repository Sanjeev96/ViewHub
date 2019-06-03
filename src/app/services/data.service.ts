import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseURL = 'https://api.themoviedb.org/3/';
  public APIKEY = '10472e5b920186c224c45d801066d9aa';

  public searchHandOver = new Subject<any>();
  public searchSTRhandOver = new Subject<any>();

  // home Tab
  public moviesTrending_ByDay_Url =
    this.baseURL + 'trending/movie/day?api_key=' + this.APIKEY;
  public moviesTrending_ByWeek_Url =
    this.baseURL + 'trending/movie/week?api_key=' + this.APIKEY;

  public tvTrending_ByDay_Url =
    this.baseURL + 'trending/tv/day?api_key=' + this.APIKEY;
  public tvTrending_ByWeek_Url =
    this.baseURL + 'trending/tv/week?api_key=' + this.APIKEY;

  // Movies Tab
  public popularMovies_Url =
    this.baseURL +
    'movie/popular?api_key=' +
    this.APIKEY +
    '&language=en-US&page=1';

  public nowPlayingMovies_Url =
    this.baseURL +
    'movie/now_playing?api_key=' +
    this.APIKEY +
    '&language=en-US&page=1&region=GB';

  public topRatedMovies_Url =
    this.baseURL +
    'movie/top_rated?api_key=' +
    this.APIKEY +
    '&language=en-US&page=1&region=GB';

  public upcomingMovies_Url =
    this.baseURL +
    'movie/upcoming?api_key=' +
    this.APIKEY +
    '&language=en-US&page=1&region=GB';

  public popularTvShows_Url =
    this.baseURL +
    'tv/popular?api_key=' +
    this.APIKEY +
    '&language=en-US&page=1&region=GB';

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
