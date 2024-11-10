import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

export const authTwoGuard: CanActivateFn = (route, state) => {
  const navigationService = inject(NavigationService);

  const token = localStorage.getItem('token');
  return token ? true : navigationService.navigateByUrl('/account/login');
  // instead of create const variable we can use this:
  // return token ? true : inject(NavigationService).navigateByUrl('/account/login');
};
