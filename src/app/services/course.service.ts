import { Injectable } from '@angular/core';
import { films, IFilm } from '../app.component.models';

@Injectable({
  providedIn: 'root'
})
export class filmService {

  constructor() { }

  getfilmList(): IFilm[] {
    return films;
  }

}
