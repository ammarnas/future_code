import { inject, Injectable } from '@angular/core';
import { IFilm } from '../app.component.models';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { baseURL } from '../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  http = inject(HttpClient);

  getFilms(): Observable<any[]> {
    console.log(`${baseURL}films`);
    return this.http.get<any>(`${baseURL}films/`).pipe(
      map(response => response.results));
  }

}
