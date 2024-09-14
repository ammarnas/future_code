import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { baseURL } from '../../../environment/environment';
import { IFilm, IGetFilmResponse } from '../../app.component.models';
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  apiService = inject(ApiService);

  getFilms(): Observable<IFilm[]> {
    console.log(`${baseURL}films`);
    return this.apiService.getRequest<IGetFilmResponse>('films')
    .pipe(
      map(response => response.results));
  }
}
