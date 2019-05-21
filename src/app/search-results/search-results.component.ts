import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import flat from 'array.prototype.flat';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public results: any = [];
  public search = {
    title: '',
    rda: '',
    desc: ''
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getSearchResults();
console.log(this.results);

  }

  getSearchResults() {
    this.dataService.searchHandOver.subscribe(data => {// Listen for when search is clicked through data service Subject
      this.results.push(...data);
    });
  }
}
