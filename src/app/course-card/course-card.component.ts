import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../app.component.models';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input({required: true}) course: ICourse = {} as ICourse;
  @Input({required: true}) index!: number;
  @Output() viewCourseEvent = new EventEmitter<ICourse>();

  viewCourse(): void {
    this.viewCourseEvent.emit(this.course);
  }
}
