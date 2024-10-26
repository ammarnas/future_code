import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { IFilm, IGetFilmResponse } from '../../app.component.models';
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  apiService = inject(ApiService);

  getFilms(): Observable<IFilm[]> {
    return this.apiService.getRequest<IGetFilmResponse>('films')
    .pipe(
      map(response => response.results));
  }
}
