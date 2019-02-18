import { MoviesTabComponent } from './Movies/movies-tab/movies-tab.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTabComponent } from './HomePage/home-tab/home-tab.component';
import { TvShowTabComponent } from './TVShows/tv-show-tab/tv-show-tab.component';
import { SingleMovieComponent } from './Movies/single-movie/single-movie.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeTabComponent },
  { path: 'tvShows', component: TvShowTabComponent },
  { path: 'movies', component: MoviesTabComponent, children: [
      {path: ':id', component: SingleMovieComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  HomeTabComponent,
  TvShowTabComponent,
  MoviesTabComponent
];
