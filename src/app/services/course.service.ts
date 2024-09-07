import { Injectable } from '@angular/core';
import { films, Ifilm } from '../app.component.models';

@Injectable({
  providedIn: 'root'
})
export class filmService {

  constructor() { }

  getfilmList(): Ifilm[] {
    return films;
  }

}
