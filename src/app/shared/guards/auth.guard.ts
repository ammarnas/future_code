import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { NavigationService } from "../services/navigation.service";

@Injectable({
  providedIn: "root"
})

export class AuthGuard implements CanActivate{
  navigationService = inject(NavigationService);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const token = localStorage.getItem('token');
    // return !!token;
    return token ? true : this.navigationService.navigateByUrl('/account/login');
  }

}
