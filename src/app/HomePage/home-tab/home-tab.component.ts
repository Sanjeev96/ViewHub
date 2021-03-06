import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss']
})
export class HomeTabComponent implements OnInit {


  public newsMovie = 'Trending Movies';
  public newsTvshows = 'Trending Shows';
  public baseImageURL = 'http://image.tmdb.org/t/p/w185/';
  public results: any[]

  public trendingMovies: any = [];
  public trendingTvShows: any = [];

  public toggleTVOverview: boolean = false;
  public selectedMovieIndex: number;

  public toggleMovieOverview: boolean = false;
  public selectedTVIndex: number;


  constructor(private dataMedia: DataService) { }

  ngOnInit() {
    this.getTrendingMovies();
    this.getTrendingTV();
  }

  getTrendingMovies() {
    this.dataMedia.getTrendingMoviesURL()
      .subscribe(dataM => {
        for (let i = 0; i < 10; i++) {
          this.trendingMovies.push(dataM['results'][i]);


          // console.log('tv shows top 5 -- ', dataM['results'][i].genre_ids);
        }
      });
  }

  getTrendingTV() {
    this.dataMedia.getTrendingTvShowsURL()
      .subscribe(dataTV => {
        for (let i = 0; i < 10; i++) {
          this.trendingTvShows.push(dataTV['results'][i]);


          // console.log('Movies 5 -- ', dataTV['results'][i].original_name);
        }
      });
  }

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

