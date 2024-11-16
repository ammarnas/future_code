import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/layout/page-not-found/page-not-found.component';
import { canMatchGuard } from './shared/guards/can-match.guard';


export const routes: Routes = [
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
  },
  // note:
  // canActivate load the component although you can't navigate to it
  // canMatch don't load the component if you don't can navigate
  {
    path: 'secure',
    loadChildren: () => import('./secure/secure.module').then(m => m.SecureModule),
    canMatch: [canMatchGuard]
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule),
  },
  {
    //Redirect routes
    path: '',
    pathMatch: 'full',
    redirectTo: "/public"
  },
  {
    //Wildcard notation Pages
    // Note: Wildcard route should always placed at last
    path: "**",
    component: PageNotFoundComponent
  }
];
