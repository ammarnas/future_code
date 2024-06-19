import { Component, Input } from '@angular/core';
import { ICourse } from '../app.component.models';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input({required: true}) course: ICourse = {} as ICourse;
}
