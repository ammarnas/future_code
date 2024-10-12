import { Component, inject } from '@angular/core';
import { IFilm } from '../app.component.models';
import { FilmCardComponent } from "../film-card/film-card.component";
import { FilmService } from '../shared/services/film.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [FilmCardComponent, SharedModule],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss'
})
export class FilmListComponent {
  private FilmService = inject(FilmService);
  films: Array<IFilm> = [];

  ngOnInit() {
  this.FilmService.getFilms().subscribe((films)=>
  this.films = films);
  }
}
