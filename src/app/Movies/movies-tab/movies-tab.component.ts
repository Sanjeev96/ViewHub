import {
  Component,
  OnInit,
  ElementRef,
  ViewChildren,
  QueryList
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movies } from 'src/app/models/movie.model';

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
    private dataService: DataService,
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
    this.dataService.getPopularMoviesURL().subscribe((datapopMovie: Movies) => {
      for (let i = 0; i < 20; i++) {
        this.Movies.splice(i);
        this.Movies.push(datapopMovie.results[i]);
        console.log('genre id', datapopMovie);
      }
    });
  }

  togglePlaying() {}

  toggleTopRated() {
    this.dataService.getTopRatedMoviesURL().subscribe((dataTopMovie: Movies) => {
      for (let i = 0; i < 20; i++) {
        this.Movies.splice(i);
        this.Movies.push(dataTopMovie.results[i]);
      }
    });
  }

  toggleUpcoming() {
    this.dataService.getUpcomingMoviesURL().subscribe((dataUpcomingMovie: Movies) => {
      for (let i = 0; i < 20; i++) {
        this.Movies.splice(i);
        this.Movies.push(dataUpcomingMovie.results[i]);
      }
    });
  }

  toggleWatch(index: number) {
    this.movieTitle = this.titleText['_results'][index]['_element'][
      'nativeElement'
    ]['innerText'];
  }

  onSelectMovie(index: number) {
    this.id = index;
    this.router.navigate([this.id], { relativeTo: this.activeRoute });
  }
}
