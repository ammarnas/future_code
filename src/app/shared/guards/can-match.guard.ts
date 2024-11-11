import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

export const canMatchGuard: CanMatchFn = (route, segments) => {
  const token = localStorage.getItem('token');
  return token ? true : inject(NavigationService).navigateByUrl('/account/login');
};
