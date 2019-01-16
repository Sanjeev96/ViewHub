import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tv-show-tab',
  templateUrl: './tv-show-tab.component.html',
  styleUrls: ['./tv-show-tab.component.scss']
})
export class TvShowTabComponent implements OnInit {

  public title = 'TV Shows';
  public popularTvShows: any = [];

  constructor(private dataMedia: DataService) { }

  ngOnInit() {
    this.getPopularTvShows();
  }

  getPopularTvShows() {
    this.dataMedia.getPopularTvShowsURL()
    .subscribe(dataPopTV=> {
      for (let i = 0; i < 20; i++) {
        this.popularTvShows.push(dataPopTV['results'][i]);
        // console.log('popular tv Shows = ', dataPopTV['results'][i].original_name);
        }
      });

  }

}
