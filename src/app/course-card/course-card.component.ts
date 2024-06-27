import { AfterContentChecked, AfterContentInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CategoryType, ICourse } from '../app.component.models';
import { NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked {
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
    console.log(`%c ngOnChanges ${this.course.id}`,'color: red');
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    console.log(`%c ngOnInit ${this.course.id}`,'color: blue');
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Called After OnInit and after every change 'OnChange' that mean at least it called twice.
    //Called also on every change on the component.
    console.log(`%c ngDoCheck ${this.course.id}`,'color: purple')
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Called after ng-content init and after DoCheck
    //Called just one time, not after every DoCheck
    console.log(`%c ngAfterContentInit ${this.course.id}`,'color: orange')
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Called After DoCheck 
    console.log(`%c ngAfterContentChecked ${this.course.id}`,'color: black')
  }
}
