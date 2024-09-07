import { Component, inject } from '@angular/core';
import { IFilm } from '../app.component.models';
import { filmService } from '../services/film.service';
import { FilmCardComponent } from "../film-card/film-card.component";

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [FilmCardComponent],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss'
})
export class filmListComponent {
  films: Array<IFilm> = [];

  // //Method 1
  // constructor(private filmService: filmService){
  // }

  // Method 2
  private filmService = inject(filmService);

  ngOnInit() {
  this.films = this.filmService.getfilmList();
  console.log(this.films);
  }
}
