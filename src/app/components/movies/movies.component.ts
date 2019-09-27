import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute,Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/Movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  public movies: Movie[];
  public page: number = 0;
  public loading: any;
  public paramsSubscription: Subscription;
  constructor(
    public movieService: MovieService,
    public route: ActivatedRoute,
    public router:Router
  ) { }//inyectamos el servicio MovieService en el componente moviesComponent

  ngOnInit() {//inicia el component
    this.paramsSubscription = this.route.params.subscribe(params => {//nos suscribimos a cambios en los parámetros de la url ej: /movie/movies o /movie/upcoming
      this.getMovies(params['category'])//upcoming o /movies
    })
  }
  trackByMovies(index: number, movie: Movie): number { return movie.id; }
  getMovies(category: string) {
    this.loading = true;
    this.movieService.getMovies(category, 'es-ES', '1').subscribe(
      (res:object) => {
        this.movies = res['results'];
        this.loading = false;
      },
      error => console.log(error))
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe()
  }
}
