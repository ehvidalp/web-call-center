import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.isLoggedIn();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.isLoggedIn();
  }

  isLoggedIn(): boolean {
    if (!this.authService.isLoggedIn()) return true;

    this.router.navigate(['/']);
    return false;
  }
}
