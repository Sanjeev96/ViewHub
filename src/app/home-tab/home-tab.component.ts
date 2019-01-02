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
  public baseImageURL = 'http://image.tmdb.org/t/p/w185/';
  public results: any[]

  public trendingMovies: any = [];
  public trendingTvShows: any = [];

  public toggleOverview: boolean = false;
  public selectedIndex: number;


  constructor(private dataMedia: DataService) { }

  ngOnInit() {
    this.getTrendingMovies();
    this.getTrendingTV();
  }

  getTrendingMovies() {
    this.dataMedia.getTrendingMovies()
      .subscribe(dataM => {
        for (let i = 0; i < 5; i++) {
          this.trendingMovies.push(dataM['results'][i]);


          // console.log('tv shows top 5 -- ', dataM['results'][i].genre_ids);
        }
      });
  }

  getTrendingTV() {
    this.dataMedia.getTrendingTvShows()
      .subscribe(dataTV => {
        for (let i = 0; i < 5; i++) {
          this.trendingTvShows.push(dataTV.results[i]);


          // console.log('Movies 5 -- ', dataTV['results'][i].original_name);
        }
      });
  }

  showOverviewBtn(i) {
    this.selectedIndex = i;
    this.toggleOverview = true;
    console.log(this.selectedIndex);
  }

  hideOverviewBtn(i) {
    this.selectedIndex = i;

    this.toggleOverview = false;
  }
}
