import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar'

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HighlightDirective } from './highlight.directive';
import { SearchComponent } from './components/search/search.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { VoteTakerComponent } from './examples/vote-taker/vote-taker.component';
import { VoterComponent } from './examples/voter/voter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeaderComponent,
    MoviesComponent,
    MovieDetailComponent,
    SpinnerComponent,
    HighlightDirective,
    SearchComponent,
    MovieListComponent,
    VoteTakerComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
