import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { TruncatePipe } from './truncate.pipe';
import { SingleMovieComponent } from './Movies/single-movie/single-movie.component';
import { SingleTvShowComponent } from './TVShows/single-tv-show/single-tv-show.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchResultsComponent } from './search-results/search-results.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchComponent,
    WatchListComponent,
    TruncatePipe,
    SingleMovieComponent,
    SingleTvShowComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
