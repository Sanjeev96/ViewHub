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

  @ViewChild('SearchInput') SearchInput: ElementRef

  constructor() {
  }

  ngOnInit() {

  }
  searchBtn() {
    let search = this.SearchInput.nativeElement.value;

    if (search == null || search == '') {
      alert('Please Enter Search');
    } else {
      console.log(search)
    }
  }
}
