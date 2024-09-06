import { Component, inject } from '@angular/core';
import { ICourse } from '../app.component.models';
import { CourseService } from '../services/course.service';
import { CourseCardComponent } from "../course-card/course-card.component";

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  courses: Array<ICourse> = [];

  // //Method 1
  // constructor(private courseService: CourseService){
  // }

  // Method 2
  private courseService = inject(CourseService);

  ngOnInit() {
  this.courses = this.courseService.getCourseList();
  console.log(this.courses);
  }
}
