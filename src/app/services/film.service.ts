import { inject, Injectable } from '@angular/core';
import { IFilm } from '../app.component.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  http = inject(HttpClient);

  getFilmList(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(`${baseURL}films`);
  }

}
