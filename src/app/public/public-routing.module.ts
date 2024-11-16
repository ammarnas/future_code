import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from '../home/home.component';
import { FilmDetailsComponent } from '../modules/film-list/film-details/film-details.component';
import { FilmListComponent } from '../modules/film-list/film-list.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'film-list',
          component: FilmListComponent
        },
        {
          path: 'film',
          component: FilmDetailsComponent
        },
        {
          path: 'film-list/:id',
          component: FilmDetailsComponent
        },
        {
          //Redirect routes
          path: '',
          pathMatch: 'full',
          redirectTo: "/public/home"
        },
        // {
        //   path: 'signal',
        //   component: SignalComponent
        // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
