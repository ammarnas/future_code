import { Component } from '@angular/core';

@Component({
  selector: 'app-child-view',
  standalone: true,
  imports: [],
  templateUrl: './child-view.component.html',
  styleUrl: './child-view.component.scss'
})
export class ChildViewComponent {
  readonly text = 'amazing text!'
}
