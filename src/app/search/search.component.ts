import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef; //is the query which will be concatenated for api call
  public search_Urlpt1 =
    'https://api.themoviedb.org/3/search/multi?api_key=10472e5b920186c224c45d801066d9aa&language=en-US&query=';
  public search_Urlpt2 = '&page=1&include_adult=false';
  public searchRequestURL: any;
  public searchRequsestData: any = [];
  public search: string;
  constructor(public dataService: DataService, private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  searchBtn() {
     this.search = this.searchInput.nativeElement.value;

    if (this.search == null || this.search === '') {
      alert('Please Enter Search');
    } else {
      this.searchRequestURL = this.search_Urlpt1 + this.search + this.search_Urlpt2;
      return this.http.get(this.searchRequestURL).subscribe(searchData => {
        this.searchRequsestData.push(...searchData['results']);
        this.dataService.searchHandOver.next(this.searchRequsestData);
        this.dataService.searchSTRhandOver.next(this.search); // placed string transfer here because anywhere else i had to click search btn twice to display search text in label for search results
      });
    }

  }
}
