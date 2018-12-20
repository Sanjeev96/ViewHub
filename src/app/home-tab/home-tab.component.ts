import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { TrendingMovies } from '../trending-movies';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss']
})
export class HomeTabComponent implements OnInit {


  public newsMovie = 'Top Movies';
  public newsTvshows = 'Top TV Shows';

  public trendingMovies: any = [];
  public trendingTvShows: any = [];


  constructor(private dataMedia: DataService) { }

  ngOnInit() {
    this.getTrendingMovies();
    this.getTrendingTV();
  }

  getTrendingMovies() {
    this.dataMedia.getTrendingMovies()
      .subscribe(data => {
        for (let i = 0; i < 5; i++) {
          this.trendingMovies = data.results[i];
          console.log(this.trendingMovies.title, this.trendingMovies.release_date);
        }
      });
  }

  getTrendingTV() {
    this.dataMedia.getTrendingTvShows()
      .subscribe(data => {
        for (let i = 0; i < 5; i++) {
          this.trendingTvShows = data.results[i];
         // this.trendingTvShows.original_name;
          console.log(this.trendingTvShows.original_name, this.trendingTvShows.first_air_date);
        }
      });
  }
}
