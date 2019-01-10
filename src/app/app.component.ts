import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ViewHub';
  navLinks = [
    { path: 'tvShows', label: 'Tv-Shows' },
    { path: 'home', label: 'Home' },
    { path: 'movies', label: 'Movies' }
  ];

  constructor() {
  }

  ngOnInit() {

  }

}
