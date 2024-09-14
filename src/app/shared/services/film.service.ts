import { inject, Injectable } from '@angular/core';
import { IFilm, IGetFilmResponse } from '../app.component.models';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { baseURL } from '../../environment/environment';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  apiService = inject(ApiService);

  getFilms(): Observable<IFilm[]> {
    console.log(`${baseURL}films`);
    return this.apiService.getRequest<IGetFilmResponse>('films/')
    .pipe(
      map(response => response.results));
  }
}
