import {
  Component,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList
} from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movies-tab',
  templateUrl: './movies-tab.component.html',
  styleUrls: ['./movies-tab.component.scss']
})
export class MoviesTabComponent implements OnInit {
  public title = 'Movies';
  public Movies: any = [];
  public movieTitle: any;
  public id: number;
  @ViewChildren('titleText') titleText: QueryList<ElementRef>;

  constructor(
    private dataMedia: DataService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.togglePopular();

    // this.activeRoute.params.subscribe((params: Params) => {
    //   this.id  = +params['id'];
    // });
  }

  togglePopular() {
    this.dataMedia.getPopularMoviesURL().subscribe(datapopMovie => {
      for (let i = 0; i < 20; i++) {
        this.Movies.splice(i);
        this.Movies.push(datapopMovie['results'][i]);
        // console.log('movies = ', datapopMovie['results'][i].title);
      }
    });
  }

  togglePlaying() {}

  toggleTopRated() {
    this.dataMedia.getTopRatedMoviesURL().subscribe(dataTopMovie => {
      for (let i = 0; i < 20; i++) {
        this.Movies.splice(i);
        this.Movies.push(dataTopMovie['results'][i]);
        // console.log('movies = ', dataTopMovie['results'][i].title);
      }
    });
  }

  toggleUpcoming() {
    this.dataMedia.getUpcomingMoviesURL().subscribe(dataUpcomingMovie => {
      for (let i = 0; i < 20; i++) {
        this.Movies.splice(i);
        this.Movies.push(dataUpcomingMovie['results'][i]);
      }
    });
  }

  toggleWatch(index: number) {
    this.movieTitle = this.titleText['_results'][index]['_element'][
      'nativeElement'
    ]['innerText'];
    //  console.log(this.movieTitle);
  }

  onSelectMovie(index: number) {
    this.id = index;
    console.log('ID of selected movies = ', this.id);
    this.router.navigate([this.id], { relativeTo: this.activeRoute });
  }
}
