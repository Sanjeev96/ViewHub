import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {

  @Input() public movieTitle_I: any;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log(this.movieTitle_I);

  }

}
