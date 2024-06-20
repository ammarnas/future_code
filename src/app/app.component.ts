import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from "./course-card/course-card.component";
import { ICourse } from './app.component.models';
import { NgForOf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CourseCardComponent, NgForOf]
})
export class AppComponent {
  data = {
    title: 'future_code'
  };
  courses: Array<ICourse> = [
  {
    id: 1,
    title: 'Angular For Beginners',
    description:'However, one should not forget further development of various forms of activity directly depends on new propositions. The significance of such problems is so obvious that the implementation of the planned tasks plays an important part in the formation of the step-by-step consistent development of the society. The diverse and plentiful experience constant quantitive growth and the scope of our activity directly depends on the step-by-step consistent development of the society.',
    lessonsCount: 89,
    category: 1,
    longDescription: '',
    imageUrl: 'https://picsum.photos/id/684/200/200',
  },
  {
    id: 2,
    title: 'Rxjs',
    description:'However, one should not forget the innovational path that we have chosen contributes to the preparing and implementation of further ways of development. On the other hand constant quantitive growth and the scope of our activity requires the clarification of the system of mass participation. On the other hand further development of various forms of activity contributes to increasing the quality of existing financial and administrative conditions.',
    lessonsCount: 25,
    category: 2,
    longDescription: '',
    imageUrl: 'https://picsum.photos/id/685/200/200',
  },
  {
    id: 3,
    title: 'Angular Material UI',
    description:'Likewise hi-tech concept of the social system allows to appreciate the value of economic practicability of decisions made. The significance of such problems is so obvious that the innovational path that we have chosen directly depends on strengthening the democratic system.',
    lessonsCount: 33,
    category: 2,
    longDescription: '',
    imageUrl: 'https://picsum.photos/id/686/200/200',
  },
  {
    id: 4,
    title: 'Course With no image',
    description:'Likewise hi-tech concept of the social system allows to appreciate the value of economic practicability of decisions made. The significance of such problems is so obvious that the innovational path that we have chosen directly depends on strengthening the democratic system.',
    lessonsCount: 33,
    category: 2,
    longDescription: '',
    imageUrl: '',
  }
];
  onLogoClick(): void{
    alert('hello world')
  }

  onKeyUp(title: string): void {
    this.data.title = title;
  }

  onCourseClicked(course: ICourse): void {
    console.log('on Course Clicked',course.description);
  }

  trackCourse(index: number, course: ICourse): number {
    return course.id;
  }
}
