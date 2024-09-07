import { Component, Input } from '@angular/core';
import { CategoryType, Ifilm } from '../app.component.models';
import { NgClass, NgStyle} from '@angular/common';
import { ChildViewComponent } from '../child-view/child-view.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [NgClass, NgStyle, ChildViewComponent],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss'
})
export class filmCardComponent {
  @Input({required: true}) film: Ifilm = {} as Ifilm;
  categoryType = CategoryType;

  constructor(private router: Router) {
  }
  get backgroundColor(): string {
    const defaultColor = "#fa7901";
    if(this.film) {
      switch(this.film.category) {
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
  viewfilm(): void {
    // this.router.navigateByUrl(`film-list/${this.film.id}`);

    this.router.navigate(["film", {queryParams: {id: 5, name: "Test"}}]);
  }
}
