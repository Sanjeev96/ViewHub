import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { TvShows } from 'src/app/models/tvShow.model';

@Component({
  selector: 'app-tv-show-tab',
  templateUrl: './tv-show-tab.component.html',
  styleUrls: ['./tv-show-tab.component.scss']
})
export class TvShowTabComponent implements OnInit {

  public title = 'TV Shows';
  public popularTvShows: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPopularTvShows();
  }

  getPopularTvShows() {
    this.dataService.getPopularTvShowsURL()
    .subscribe((dataPopTV: TvShows) => {
      for (let i = 0; i < 20; i++) {
        this.popularTvShows.push(dataPopTV.results[i]);
        }
      });

  }

}
