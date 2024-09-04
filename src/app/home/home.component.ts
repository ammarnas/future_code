import { Component, Input } from '@angular/core';
import { ICourseVM, courses } from './home.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() id = '';

  readonly courses: Array<ICourseVM> = courses;
}
