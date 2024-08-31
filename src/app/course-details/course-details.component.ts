import { Component } from '@angular/core';
import { ICourse } from '../app.component.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {
  course!: ICourse;

  constructor(private activatedRoute: ActivatedRoute){}

// Note:
// 1- Not recommend it
// 2- Not detect the changes of the route
  ngOnInit() {
  // first static way
  const id = this.activatedRoute.snapshot.params['id'];
  console.log('snapshot params', id);

  // second static way
  const courseId = this.activatedRoute.snapshot.paramMap.get('id');
  console.log('snapshot paramMap', courseId);

  }
}
