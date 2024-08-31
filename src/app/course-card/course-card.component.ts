import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { CategoryType, ICourse } from '../app.component.models';
import { NgClass, NgStyle} from '@angular/common';
import { ChildViewComponent } from '../child-view/child-view.component';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgClass, NgStyle, ChildViewComponent],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input({required: true}) course: ICourse = {} as ICourse;
  categoryType = CategoryType;

  get backgroundColor(): string {
    const defaultColor = "#fa7901";
    if(this.course) {
      switch(this.course.category) {
        case this.categoryType.intermediate:
          return "#00adee";
        case this.categoryType.advanced:
          return "green";
        case this.categoryType.other:
          return "#b4bd00";
        default:
          return defaultColor;
      }
    }
    else {
      return defaultColor;
    }
  }
  viewCourse(): void {}
}
