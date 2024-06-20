import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryType, ICourse } from '../app.component.models';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input({required: true}) course: ICourse = {} as ICourse;
  @Input({required: true}) index!: number;
  @Output() viewCourseEvent = new EventEmitter<ICourse>();

  categoryType = CategoryType;
  viewCourse(): void {
    this.viewCourseEvent.emit(this.course);
  }
}
