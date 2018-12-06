import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ViewHub';

  navLinks = [
    {path: 'home', label: 'Home'},
    {path: 'tvShows', label: 'Tv-Shows'},
    {path: 'movies', label: 'Movies'}
  ];
}
