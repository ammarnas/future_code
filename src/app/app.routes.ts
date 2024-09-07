import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { filmListComponent } from './film-list/film-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { filmDetailsComponent } from './film-details/film-details.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'film-list',
    component: filmListComponent
  },
  {
    path: 'film',
    component: filmListComponent
  },
  {
    path: 'film-list/:id',
    component: filmDetailsComponent
  },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {path: 'login', component: LoginComponent },
      {path: 'register', component: RegisterComponent },
      {path: '', redirectTo: '/account/login', pathMatch: 'full'}
    ]
  },
  {
    //Redirect routes
    path: '',
    pathMatch: 'full',
    redirectTo: "home"
  },
  {
    //Wildcard notation Pages
    // Note: Wildcard route should always placed at last
    path: "**",
    component: PageNotFoundComponent
  }
];
