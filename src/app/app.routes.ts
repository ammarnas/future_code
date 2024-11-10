import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmListComponent } from './film-list/film-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { SecureComponent } from './secure/secure.component';
import { authTwoGuard } from './shared/guards/auth-two.guard';

export const routes: Routes = [
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
  },  {
    path: 'secure',
    component: SecureComponent,
    // canActivate: [AuthGuard],
    canActivate: [authTwoGuard],
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
