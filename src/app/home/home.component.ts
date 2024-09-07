import { Component, Input } from '@angular/core';
import { IFilmVM, films } from './home.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() id = '';

  readonly films: Array<IFilmVM> = films;
}
