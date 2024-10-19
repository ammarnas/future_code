import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IFilm } from './app.component.models';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';
import { HeaderComponent } from "./header/header.component";
import { ApiService } from './shared/services/api.service';
import { TranslationService } from './shared/services/translation.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [ApiService],
    imports: [RouterOutlet, CommonModule, HeaderComponent]
})
// note: I remove the httpClintModule from imports and add it in app.config.ts cuz we need it in ngx-translate module we project start up and that before come to this component
// note: watch this to understand https://youtu.be/jMu3nSTreiA?list=PLgU7izgeR2lwwNRNY4fYQf3GZawV-EGnW&t=80
export class AppComponent implements OnInit {
  data = {
    filmName: 'Angular Core film!',
    title: 'Angular For Beginners In Arabic',
  };

  translationService = inject(TranslationService);

  onLogoClick(): void{
    alert('hello world')
  }

  onKeyUp(title: string): void {
    this.data.title = title;
  }

  onFilmClicked(film: IFilm): void {
    console.log('on film Clicked',film.id);
  }

  trackFilm(index: number, film: IFilm): number {
    return film.id;
  }

  ngOnInit(): void {
    this.translationService.setDefaultLanguage('en');
  }
}
