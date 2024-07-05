import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {StoreComponent} from "./store/store.component";


// https://dev.to/this-is-angular/demystifying-angular-route-guards-a-beginners-guide-to-secure-navigation-597b
// https://medium.com/ngconf/functional-route-guards-in-angular-8829f0e4ca5c
@Injectable({
  providedIn: 'root'
})
export class StoreFirstGuard implements CanActivate {

  private firstNavigation = true;
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {

    console.log(`firstNavigation : ${this.firstNavigation}`);
    console.log(`url : ${this.router.url}`);


    if (this.firstNavigation) {

      console.log('I m inside, this is my first navigation');

      this.firstNavigation = false;
      if (route.component != StoreComponent) {

        console.log('I m not in StoreComponent');

        this.router.navigateByUrl("/");
        return false;
      }
    }
    return true;
  }

}
