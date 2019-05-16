import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public fields = {
    title: '',
    rda: '',
    desc: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.searchHandOver.subscribe(results => // Listen for when search is clicked through data service Subject
      console.log('search page data results = ', ...results)
    );

  }

}
