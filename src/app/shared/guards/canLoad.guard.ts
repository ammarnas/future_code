import { inject, Injectable } from "@angular/core";
import { NavigationService } from "../services/navigation.service";
import { CanLoad, GuardResult, MaybeAsync, Route, UrlSegment } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CanLoadGuard implements CanLoad {

  navigationService = inject(NavigationService);
  canLoad(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    const token = localStorage.getItem('token');
    return token ? true : this.navigationService.navigateByUrl('/account/login');
    }

}
