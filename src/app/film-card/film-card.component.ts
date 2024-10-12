import { Component, Input } from '@angular/core';
import { CategoryType, IFilm } from '../app.component.models';
import { NgClass, NgStyle} from '@angular/common';
import { ChildViewComponent } from '../child-view/child-view.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [NgClass, NgStyle, ChildViewComponent],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss'
})
export class FilmCardComponent {
  @Input({required: true}) film!: IFilm;
  categoryType = CategoryType;
  randomImage!: string;

  constructor(private router: Router) {
    this.getRandomImage();
  }
  get backgroundColor(): string {
    const defaultColor = "#fa7901";
    if(this.film) {
      switch(this.film.episode_id) {
        case 1:
          return "#00adee";
        case 2:
          return "green";
        case 3:
          return "#b4bd00";
        default:
          return defaultColor;
      }
    }
    else {
      return defaultColor;
    }
  }
  viewFilm(): void {
    // this.router.navigateByUrl(`film-list/${this.film.id}`);
    console.log(this.film.id)
    this.router.navigate(['film'], {queryParams: {id: this.film.id}});
  }

  getRandomImage() {
    let random = Math.floor(Math.random() * 1000);
    this.randomImage = `https://picsum.photos/id/${random}/1000/1000`;
  }
}
