import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-movies-tab',
  templateUrl: './movies-tab.component.html',
  styleUrls: ['./movies-tab.component.scss']
})
export class MoviesTabComponent implements OnInit {

  public title = 'Movies';
  public Movies: any = []
  @ViewChildren('titleText') titleText: QueryList<ElementRef>;
  public movieTitle: any;

  constructor(private dataMedia: DataService) { }

  ngOnInit() {
    this.togglePopular();

  }

  // getPopularMovies() {
  //   this.dataMedia.getPopularMoviesURL()
  //     .subscribe(datapopMovie => {
  //       for (let i = 0; i < 20; i++) {
  //         this.Movies.push(datapopMovie['results'][i]);
  //       }
  //     });
  // }

  togglePopular() {
    this.dataMedia.getPopularMoviesURL()
      .subscribe(datapopMovie => {
        for (let i = 0; i < 20; i++) {
          this.Movies.splice(i);
          this.Movies.push(datapopMovie['results'][i]);
          // console.log('movies = ', datapopMovie['results'][i].title);

        }
      });
  }

  togglePlaying() {
    // this.dataMedia.getNowPlayingMoviesURL()
    //   .subscribe(dataPlayingMovie => {
    //     for (let i = 0; i < 20; i++){
    //       this.
    //     }
    //   });
  }

  toggleTopRated() {
    this.dataMedia.getTopRatedMoviesURL()
      .subscribe(dataTopMovie => {
        for (let i = 0; i < 20; i++) {
          this.Movies.splice(i);
          this.Movies.push(dataTopMovie['results'][i]);
          // console.log('movies = ', dataTopMovie['results'][i].title);
        }
      });
  }

  toggleUpcoming() {

  }

  toggleWatch(index: number) {

    this.movieTitle = this.titleText['_results'][index]['_element']['nativeElement']['innerText'];
    //  console.log(this.movieTitle); 



  }
}

