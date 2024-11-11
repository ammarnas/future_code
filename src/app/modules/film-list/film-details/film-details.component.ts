import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IFilm } from '../../../app.component.models';

@Component({
  selector: 'app-film-details',
  standalone: true,
  imports: [],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss'
})
export class FilmDetailsComponent {
  film!: IFilm;
  @Input('id') filmId: string = ''; // this binding from route
  constructor(private router: Router){}


  getNext(){
    this.router.navigate(['course'], {queryParams: {courseId: this.film.id + 1, name: 'Testing'}, queryParamsHandling: 'preserve'});
  }

  goToHome(){
    this.router.navigate(['home'], {queryParams: {id: this.film.id}, queryParamsHandling: 'preserve'});
  }

  // private getFilm(filmId: number): IFilm {
  //   return films.find(c => c.id === filmId);
  // }

}
