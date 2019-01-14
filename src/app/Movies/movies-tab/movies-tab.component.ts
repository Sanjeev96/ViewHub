import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-movies-tab',
  templateUrl: './movies-tab.component.html',
  styleUrls: ['./movies-tab.component.scss']
})
export class MoviesTabComponent implements OnInit {

  public title = 'Movies';
  public popularMovies: any = []


  constructor(private dataMedia: DataService) { }

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.dataMedia.getPopularMoviesURL()
    .subscribe(datapopMovie=> {
      for (let i = 0; i < 20; i++) {
        this.popularMovies.push(datapopMovie['results'][i]);
        // console.log('movies = ', datapopMovie['results'][i].title);
        }
      });



  }

}
