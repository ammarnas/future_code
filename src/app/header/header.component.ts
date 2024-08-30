import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  data = {
    courseName: 'Angular Core Course!',
    lessonName: 'Angular For Beginners In Arabic',
  };
  isNavbarSticky = false;
}
