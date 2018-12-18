import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss']
})
export class HomeTabComponent implements OnInit {


  public newsMovie = 'Movie News';
  public newsTvshows = 'Tv-Show News';

  public trendingMovies: any = [];


  constructor(private dataMedia: DataService) { }

  ngOnInit() {
    this.dataMedia.getTrendingMovies()
      .subscribe(data => {
        for (let i = 0; i <= 5; i++) {
          this.trendingMovies = data.results[i];
          this.trendingMovies.title
          console.log(this.trendingMovies.title,this.trendingMovies.release_date);

        }
      });

  }
}
