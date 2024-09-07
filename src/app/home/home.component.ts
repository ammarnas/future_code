import { Component, Input } from '@angular/core';
import { IfilmVM, films } from './home.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() id = '';

  readonly films: Array<IfilmVM> = films;
}
