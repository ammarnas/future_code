import { Injectable } from '@angular/core';
import { courses, ICourse } from '../app.component.models';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourseList(): ICourse[] {
    return courses;
  }

}
