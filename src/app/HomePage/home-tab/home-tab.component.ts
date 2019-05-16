import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss']
})
export class HomeTabComponent implements OnInit {
  public newsMovie = 'Trending Movies';
  public newsTvshows = 'Trending Shows';
  public baseImageURL = 'http://image.tmdb.org/t/p/w185/';
  public results: any[];

  public trendingMovies: any = [];
  public trendingTvShows: any = [];

  public toggleTVOverview: boolean = false;
  public selectedMovieIndex: number;

  public toggleMovieOverview: boolean = false;
  public selectedTVIndex: number;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getTrendingMoviesbyWeek();
    this.getTrendingTVbyWeek();
  }

  // Trending Movies
  getTrendingMoviesbyWeek() {
    this.dataService.getTrendingMoviesbyWeekURL().subscribe(dataM => {
      for (let i = 0; i < 10; i++) {
        this.trendingMovies.splice(i);
        this.trendingMovies.push(dataM['results'][i]);
      }
    });
  }

  getTrendingMoviesbyDay() {
    this.dataService.getTrendingMoviesbyDayURL().subscribe(dataM => {
      for (let i = 0; i < 10; i++) {
        this.trendingMovies.splice(i);
        this.trendingMovies.push(dataM['results'][i]);
      }
    });
  }

  // trendingTVshows
  getTrendingTVbyWeek() {
    this.dataService.getTrendingTvShowsbyWeekURL().subscribe(dataTV => {
      for (let i = 0; i < 10; i++) {
        this.trendingTvShows.splice(i);
        this.trendingTvShows.push(dataTV['results'][i]);
      }
    });
  }

  getTrendingTVbyDay() {
    this.dataService.getTrendingTvShowsbyDayURL().subscribe(dataM => {
      for (let i = 0; i < 10; i++) {
        this.trendingTvShows.splice(i);
        this.trendingTvShows.push(dataM['results'][i]);
      }
    });
  }

  // Showing and hiding descriptions
  showMovieOverviewBtn(i) {
    if (this.selectedMovieIndex !== i) {
      this.selectedMovieIndex = i;
      this.toggleMovieOverview = true;
    }
  }
  hideMovieOverviewBtn() {
    this.toggleMovieOverview = false;
    this.selectedMovieIndex = null;
  }

  showTVOverviewBtn(i) {
    if (this.selectedTVIndex !== i) {
      this.selectedTVIndex = i;
      this.toggleTVOverview = true;
    }
  }
  hideTVOverviewBtn() {
    this.toggleTVOverview = false;
    this.selectedTVIndex = null;
  }
}
