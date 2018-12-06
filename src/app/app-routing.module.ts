import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { TvShowTabComponent } from './tv-show-tab/tv-show-tab.component';
import { MoviesTabComponent } from './movies-tab/movies-tab.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeTabComponent },
  { path: 'tvShows', component: TvShowTabComponent },
  { path: 'movies', component: MoviesTabComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeTabComponent, TvShowTabComponent, MoviesTabComponent];
