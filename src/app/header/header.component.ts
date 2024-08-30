import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  data = {
    courseName: 'Angular Core Course!',
    lessonName: 'Angular For Beginners In Arabic',
  };
  isNavbarFixed = false;

  @HostListener('window:scroll',['$event']) onScroll(){
    if(window.scrollY > 50){
      this.isNavbarFixed = true;
    }
    else{
      this.isNavbarFixed = false;
    }
  }
}
