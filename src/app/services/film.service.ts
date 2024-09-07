import { Injectable } from '@angular/core';
import { films, IFilm } from '../app.component.models';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  getFilmList(): IFilm[] {
    return films;
  }

}
