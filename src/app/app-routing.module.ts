import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { CounterComponent } from './components/counter/counter.component';
import { SearchComponent } from './components/search/search.component';
import { VoteTakerComponent } from './examples/vote-taker/vote-taker.component';


const routes: Routes = [
  { path: 'movies/:category', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'counter', component: CounterComponent },
  {path:'search',component:SearchComponent},
  {path:'vote',component:VoteTakerComponent}

  // {path:'upcoming',component:},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
