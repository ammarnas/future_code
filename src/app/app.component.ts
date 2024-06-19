import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  data = {
    title: 'future_code'
  };

  onLogoClick(): void{
    alert('hello world')
  }

  onKeyUp(title: string): void {
    this.data.title = title;
  }
}
