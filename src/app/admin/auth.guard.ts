import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../model/auth.service";

export const authGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);

  if (!authService.authenticated) {
    router.navigateByUrl("/admin/auth");
    return false;
  }

  return true;
};
