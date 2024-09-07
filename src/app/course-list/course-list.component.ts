import { Component, inject } from '@angular/core';
import { Ifilm } from '../app.component.models';
import { filmService } from '../services/film.service';
import { filmCardComponent } from "../film-card/film-card.component";

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [filmCardComponent],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss'
})
export class filmListComponent {
  films: Array<Ifilm> = [];

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
