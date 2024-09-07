import { Component, Input, input } from '@angular/core';
import { IFilm } from '../app.component.models';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

@Component({
  selector: 'app-film-details',
  standalone: true,
  imports: [],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss'
})
export class FilmDetailsComponent {
  film!: IFilm;
  // should be the same name in router
  // and use withComponentInputBinding in app.Config
  // don't make bind for changes
  @Input('id') filmId: string = ''; // this binding from route
  constructor(private activatedRoute: ActivatedRoute, private router: Router){}

// Note:
// 1- Not recommend it
// 2- Not detect the changes of the route
  ngOnInit() {
  // // first static way
  // const id = this.activatedRoute.snapshot.params['id'];
  // console.log('snapshot params', id);

  // // second static way
  // const filmId = this.activatedRoute.snapshot.paramMap.get('id');
  // console.log('snapshot paramMap', filmId);

  // this.activatedRoute.params.subscribe((res: Params) => {
  //   console.log('params ', res['id']);
  // })

  // this.activatedRoute.paramMap.subscribe((res: ParamMap) => {
  //   console.log('paramMap ', res.get('id'));
  // })

  // console.log('id', this.filmId);

  this.activatedRoute.queryParams.subscribe(res => {
    console.log('queryParams', res['id']);
  })

  this.activatedRoute.queryParamMap.subscribe(res => {
    console.log("queryParamMap", res.get('id'));
    const id = Number(res.get('id'));
    // this.film = this.getfilm(id);
  })
  }

  getNext(){
    this.router.navigate([`film`, {queryParams: {id: this.film.id + 1}}]);
  }

  goToHome(){
    this.router.navigate([`home`, {queryParams: {id: this.film.id + 1}}]);
  }

  // getFilm(filmId: number): IFilm {
  //   return films.find(c => c.id === filmId);
  // }

}
