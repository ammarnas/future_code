import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from "./course-card/course-card.component";
import { CategoryType, ICourse } from './app.component.models';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CourseCardComponent, CommonModule]
})
export class AppComponent {
  data = {
    courseName: 'Angular Core Course!',
    title: 'Angular For Beginners In Arabic',
  };

  courses: Array<ICourse> = [
  {
    id: 1,
    title: 'Angular For Beginners',
    description:'However, one should not forget further development of various forms of activity directly depends on new propositions. The significance of such problems is so obvious that the implementation of the planned tasks plays an important part in the formation of the step-by-step consistent development of the society. The diverse and plentiful experience constant quantitive growth and the scope of our activity directly depends on the step-by-step consistent development of the society.',
    lessonsCount: 89,
    category: CategoryType.beginners,
    longDescription: '',
    imageUrl: 'https://picsum.photos/id/684/200/200',
  },
  {
    id: 2,
    title: 'Rxjs',
    description:'However, one should not forget the innovational path that we have chosen contributes to the preparing and implementation of further ways of development. On the other hand constant quantitive growth and the scope of our activity requires the clarification of the system of mass participation. On the other hand further development of various forms of activity contributes to increasing the quality of existing financial and administrative conditions.',
    lessonsCount: 25,
    category: CategoryType.intermediate,
    longDescription: '',
    imageUrl: 'https://picsum.photos/id/685/200/200',
  },
  {
    id: 3,
    title: 'Angular Material UI',
    description:'Likewise hi-tech concept of the social system allows to appreciate the value of economic practicability of decisions made. The significance of such problems is so obvious that the innovational path that we have chosen directly depends on strengthening the democratic system.',
    lessonsCount: 33,
    category: CategoryType.advanced,
    longDescription: '',
    imageUrl: 'https://picsum.photos/id/557/200/200',
  },
  {
    id: 4,
    title: 'Course With no image',
    description:'Likewise hi-tech concept of the social system allows to appreciate the value of economic practicability of decisions made. The significance of such problems is so obvious that the innovational path that we have chosen directly depends on strengthening the democratic system.',
    lessonsCount: 33,
    category: CategoryType.other,
    longDescription: '',
    imageUrl: 'https://picsum.photos/id/556/200/200',
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
