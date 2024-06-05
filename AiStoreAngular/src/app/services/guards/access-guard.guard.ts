import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../services/Auth/auth.service';
import { AuthService } from '../Auth/auth.service';
import { inject } from '@angular/core';
import { of } from 'rxjs';

export const accessGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  const path = route.url[0].path
  if(authService.hasAccess(path)){
    return of(true);
  }
  else{
    // return of(router.createUrlTree(['/signin']));
    return of(router.createUrlTree(['/signin']));
  }
};
