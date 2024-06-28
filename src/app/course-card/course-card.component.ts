import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, viewChild } from '@angular/core';
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
export class CourseCardComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {
  @Input({required: true}) course: ICourse = {} as ICourse;
  @Input({required: true}) index!: number;
  @Input({required: true}) title!: string;
  @Output() viewCourseEvent = new EventEmitter<ICourse>();

  @ViewChild(ChildViewComponent) childViewComponent!: ChildViewComponent;
  categoryType = CategoryType;
  viewCourse(): void {
    this.viewCourseEvent.emit(this.course);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    console.log(`%c ngOnChanges ${this.course.id} - ${this.childViewComponent}`,'color: red');
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    console.log(`%c ngOnInit ${this.course.id} - ${this.childViewComponent}`,'color: blue');
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Called After OnInit and after every change 'OnChange' that mean at least it called twice.
    //Called also on every change on the component.
    console.log(`%c ngDoCheck ${this.course.id} - ${this.childViewComponent}`,'color: purple')
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Called after ng-content init and after DoCheck
    //Called just one time, not after every DoCheck
    console.log(`%c ngAfterContentInit ${this.course.id} - ${this.childViewComponent}`,'color: orange')
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Called After DoCheck 
    console.log(`%c ngAfterContentChecked ${this.course.id} - ${this.childViewComponent}`,'color: black')
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentChecked when the component's view has been initialized. Applies to components only.
    //Called after my component and his children was init
    //Called just one time.
    //Before this the ${this.childViewComponent} is undefined in here will be define and can access it.
    console.log(`%c ngAfterViewInit ${this.course.id} - ${this.childViewComponent.text}`,'color: gold')
  }
}
