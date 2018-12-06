import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss']
})
export class HomeTabComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  public newsMovie = 'Movie News';
  public newsTvshows = 'Tv-Show News';


  constructor() { }

  ngOnInit() {
  }

}
