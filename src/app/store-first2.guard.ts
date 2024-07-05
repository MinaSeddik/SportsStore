import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";

export const storeFirst2Guard: CanActivateFn = (route, state) => {

      // const oauthService: AuthService = inject(AuthService);
      //
      // if (oauthService.hasAccess() ) {
      //   return true;
      // }
      // oauthService.login();
      return false;

};
