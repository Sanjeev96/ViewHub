import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HttpClientModule } from '@angular/common/http';
import { MoviePageComponent } from './Movies/movie-page/movie-page.component';
import { TVShowPageComponent } from './TVShows/tvshow-page/tvshow-page.component';
import { SearchComponent } from './search/search.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { TruncatePipe } from './truncate.pipe';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MoviePageComponent,
    TVShowPageComponent,
    SearchComponent,
    WatchListComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
