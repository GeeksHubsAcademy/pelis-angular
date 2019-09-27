import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public moviesSearched:Movie[]=[];
  constructor(public http:HttpClient) { }//inyectamos el httpClient de angular en el servicio para hacer AJAX
  
  getMovies(category:string,language:string,page:string):Observable<object>{//creamos tantos métodos como necesitemos para traer la información que requieren nuestros componentes
    return this.http.get(`https://api.themoviedb.org/3/movie/${category}?api_key=09e6cf9871795d48bba7c9be1465ff3e&language=${language}&page=${page}`);
  }
  searchMovie(search:string):Observable<object>{
    
     return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=09e6cf9871795d48bba7c9be1465ff3e&language=en-US&page=1&include_adult=false&query=${search}`)
  }
}
