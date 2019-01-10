import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchInput') searchInput: ElementRef; //is the query which will be concatenated for api call
  public search_Urlpt1 = 'https://api.themoviedb.org/3/search/multi?api_key=10472e5b920186c224c45d801066d9aa&language=en-US&query='
  public search_Urlpt2 = '&page=1&include_adult=false';
  public searchRequestURL: any;
  public searchRequsestData: any = []; 
  constructor(public dataMedia: DataService, private http: HttpClient) { }

  ngOnInit() {
  }

  searchBtn() {
    let search = this.searchInput.nativeElement.value;

    if (search == null || search == '') {
      alert('Please Enter Search');
    } else {
      this.searchRequestURL = this.search_Urlpt1 + search + this.search_Urlpt2
      return this.http.get(this.searchRequestURL)
      .subscribe(searchData => {
        this.searchRequsestData.push(searchData['results']);
        console.log(this.searchRequsestData)
      });
      
    }
  }
}
