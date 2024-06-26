import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CategoryType, ICourse } from '../app.component.models';
import { NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements OnChanges, OnInit {
  @Input({required: true}) course: ICourse = {} as ICourse;
  @Input({required: true}) index!: number;
  @Input({required: true}) title!: string;
  @Output() viewCourseEvent = new EventEmitter<ICourse>();

  categoryType = CategoryType;
  viewCourse(): void {
    this.viewCourseEvent.emit(this.course);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    console.log('ngOnChange', this.course.id, changes);
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    console.log('ngOnInit', this.course.id);
        
  }
}
