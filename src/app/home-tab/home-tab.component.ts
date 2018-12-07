import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss']
})
export class HomeTabComponent implements OnInit {


  public newsMovie = 'Movie News';
  public newsTvshows = 'Tv-Show News';


  constructor(private dataMedia: DataService) { }

  ngOnInit() {
this.dataMedia.getTrendingMovies();

  }

}
