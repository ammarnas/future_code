import { Component } from '@angular/core';
import { ICourse } from '../app.component.models';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {
  course!: ICourse;
}
