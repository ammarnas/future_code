import { Component, inject } from '@angular/core';
import { IFilm } from '../app.component.models';
import { FilmCardComponent } from "../film-card/film-card.component";
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [FilmCardComponent],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss'
})
export class FilmListComponent {
  films: Array<IFilm> = [];

  // //Method 1
  // constructor(private FilmService: FilmService){
  // }

  // Method 2
  private FilmService = inject(FilmService);

  ngOnInit() {
  this.FilmService.getFilms().subscribe((films)=>
  this.films = films);
  console.log(this.films);
  }
}
