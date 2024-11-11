import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './modules/account/account.component';
import { LoginComponent } from './modules/account/login/login.component';
import { RegisterComponent } from './modules/account/register/register.component';
import { FilmDetailsComponent } from './modules/film-list/film-details/film-details.component';
import { FilmListComponent } from './modules/film-list/film-list.component';
import { PageNotFoundComponent } from './modules/layout/page-not-found/page-not-found.component';
import { CanLoadFnGuard } from './shared/guards/canLoad.guard';


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
    // component: SecureComponent,
    loadChildren: () => import('./secure/secure.module').then(m => m.SecureModule),
    canLoad: [CanLoadFnGuard]
    // loadComponent: () => import('./secure/secure.component').then(c => c.SecureComponent)
    // canActivate: [AuthGuard],
    //canActivate: [authTwoGuard],
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
